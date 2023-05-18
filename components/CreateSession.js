import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, KeyboardAvoidingView, Alert, Animated, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Platforms from './Platforms';
import Games from './Games';
import SessionDescription from './SessionDescription';
import { getDatabase, push, ref } from 'firebase/database';
import firebaseConfig from '../config/firebaseconfig';
import { initializeApp } from "firebase/app";
import blacklist from '../config/blacklist';
import { TextInput } from 'react-native-gesture-handler';

// Initialize firebase 

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function CreateSession() {
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [selectedGame, setSelectedGame] = useState('');
    const [gameDescription, setGameDescription] = useState('');
    const [username, setUsername] = useState('');
    const scaleValue = useRef(new Animated.Value(1)).current;

    // Handle button press and push gamesession to database

    const handleButtonPress = () => {
        const timestamp = new Date().toLocaleString();

        if (selectedPlatform === '' || selectedGame === '' || gameDescription === '' || username === '') {
            Alert.alert('Please fill all fields');
        } else if (filterText(gameDescription)) {
            Alert.alert('Warning', 'Your description contains blacklisted words. \nBe nice!');
        } else if (filterText(username)) {
            Alert.alert('Warning', 'Your username contains blacklisted words.');
        } else {
            push(
                ref(database, 'gamesessions/'),
                {
                    'selectedPlatform': selectedPlatform,
                    'selectedGame': selectedGame,
                    'gameDescription': gameDescription,
                    timestamp: timestamp,
                    'username': username
                }
            );

            setSelectedPlatform('');
            setSelectedGame('');
            setGameDescription('');
            setUsername('');
            Alert.alert('\n       Game Session created! 🥳');
        }
    };

    // Filter text for blacklisted words

    const filterText = (text) => {
        for (let i = 0; i < blacklist.length; i++) {
            const word = blacklist[i];
            const regex = new RegExp(`\\b${word}\\b`, 'gi');

            if (regex.test(text)) {
                return true;
            }
        }
        return false;
    };

    const startButtonAnimation = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 0.8,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <ImageBackground
            source={require('../assets/GameMateBackground.jpg')}
            style={styles.container}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.overlay}>
                <KeyboardAvoidingView style={styles.container} behavior="position">
                    <Text style={styles.pageHeader}>Create Session</Text>
                    <View style={styles.creation}>
                        <Games selectedGame={selectedGame} setSelectedGame={setSelectedGame} resetValue={selectedGame} />
                        <Platforms selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} resetValue={selectedPlatform} />
                        <SessionDescription gameDescription={gameDescription} setGameDescription={setGameDescription} value={gameDescription} />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Username'
                            maxLength={50}
                            onChangeText={setUsername}
                            value={username}
                        ></TextInput>
                        <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleValue }] }]}>
                            <Button
                                onPress={() => {
                                    startButtonAnimation();
                                    handleButtonPress();
                                }}
                                title='create'
                                color='#0088B4'
                                style={styles.button}
                            />
                        </Animated.View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

    font: {
        color: 'white',
        margin: 20,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 5,
        width: 150,
        padding: 5
    },


    pageHeader: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    creation: {

        borderColor: 'white',
        width: '100%',
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        margin: 20
    },

    textInput: {
        backgroundColor: 'white',
        width: 165,
        textAlign: 'center',
        padding: 5,
        borderRadius: 10,
        marginBottom: 30,

    },

    selectList: {
        color: 'white',
    },

    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
        margin: 10
    },
});
