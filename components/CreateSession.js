import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, KeyboardAvoidingView } from 'react-native';
import Platforms from './Platforms';
import Games from './Games';
import SessionDescription from './SessionDescription';
import { getDatabase, push, ref, set,  onValue } from 'firebase/database';
import firebaseConfig from '../config/firebaseconfig';
import { initializeApp } from "firebase/app";


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export default function CreateSession() {
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [selectedGame, setSelectedGame] = useState('');
    const [gameDescription, setGameDescription] = useState('');
    



    // Push new GameSession to realtime database gamesessions table and re-render page
    const handleButtonPress = () => {
            push(
                ref(database, 'gamesessions/'),
                { 'selectedPlatform': selectedPlatform, 'selectedGame': selectedGame, 'gameDescription': gameDescription });
                
            setSelectedPlatform('');
            setSelectedGame('');
            setGameDescription('');
        };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="position">
            <View style={styles.creation}>
                <Text style={styles.headerFont}>Create Session</Text>
                <Platforms selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
                <Games selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
                <SessionDescription gameDescription={gameDescription} setGameDescription={setGameDescription} />
                <Button
                    onPress={handleButtonPress}
                    title='publish'
                    color='#0088B4'
                    style={styles.button}


                ></Button>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        width: '80%',

    },

    font: {
        color: 'white'
    },

    headerFont: {
        color: 'white',
        fontSize: 30,
        marginBottom: 50,
        marginTop: 30
    },

    creation: {
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',

        textAlign: 'center',
        alignItems: 'center',

    },

    selectList: {
        color: 'white'
    },

    button: {

    },
});