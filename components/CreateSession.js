import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, KeyboardAvoidingView, Alert, Animated } from 'react-native';
import Platforms from './Platforms';
import Games from './Games';
import SessionDescription from './SessionDescription';
import { getDatabase, push, ref, set, onValue, serverTimestamp } from 'firebase/database';
import firebaseConfig from '../config/firebaseconfig';
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function CreateSession() {
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [selectedGame, setSelectedGame] = useState('');
    const [gameDescription, setGameDescription] = useState('');
    const scaleValue = useRef(new Animated.Value(1)).current;

    // Add new entry to database table 'gamesessions/'

    const handleButtonPress = () => {
        const timestamp = new Date().toLocaleString();

        // Alert if all fields aren't filled

        if (selectedPlatform == "" || selectedGame == "" || gameDescription == "") {
            Alert.alert('Please fill all fields');
        }

        else {
            push(
                ref(database, 'gamesessions/'),
                { 'selectedPlatform': selectedPlatform, 'selectedGame': selectedGame, 'gameDescription': gameDescription, timestamp: timestamp }
            );

            setSelectedPlatform('');
            setSelectedGame('');
            setGameDescription('');
            Alert.alert('\n       Game Session created! 🥳');
        }
    };

    // Animation when button is pressed

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
        <KeyboardAvoidingView style={styles.container} behavior="position">
            <Text style={styles.pageHeader}>Create Session</Text>
            <View style={styles.creation}>
                <Games selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
                <Platforms selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
                <SessionDescription gameDescription={gameDescription} setGameDescription={setGameDescription} />
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
    },

    pageHeader: {
        color: 'white',
        fontSize: 25,
        marginBottom: 20,
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
    },

    selectList: {
        color: 'white',
    },

    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
    },
});
