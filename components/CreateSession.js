import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, KeyboardAvoidingView, Alert, Animated } from 'react-native';
import Platforms from './Platforms';
import Games from './Games';
import SessionDescription from './SessionDescription';
import { getDatabase, push, ref} from 'firebase/database';
import firebaseConfig from './firebaseconfig';
import { initializeApp } from "firebase/app";
import blacklist from './blacklist';
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
            Alert.alert('Warning', 'Your description contains blacklisted words.');
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


    return (
        <KeyboardAvoidingView style={styles.container} behavior="position">
            <Text style={styles.pageHeader}>Create Session</Text>
            <View style={styles.creation}>
                <Games selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
                <Platforms selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
                <SessionDescription gameDescription={gameDescription} setGameDescription={setGameDescription} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Username'
                    maxLength={50}
                    onChangeText={setUsername}
                ></TextInput>
                <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleValue }] }]}>
                    <Button
                        onPress={() => {
                            handleButtonPress();
                        }}
                        title='create'
                        color='#0088B4'
                        style={styles.button}
                    />
                </Animated.View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
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
        fontSize: 25,
        marginBottom: 0,
        marginTop: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    creation: {
        backgroundColor: 'black',
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
