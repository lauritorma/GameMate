import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,  KeyboardAvoidingView  } from 'react-native';
import Platforms from './Platforms';
import Games from './Games';
import SessionDescription from './SessionDescription';

export default function CreateSession() {
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [selectedGame, setSelectedGame] = useState('');
    const [gameDescription, setGameDescription] = useState('');
    
    
    
    const handleButtonPress = () => {
        console.log("Button pressed!");
        
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="position">
            <View style={styles.creation}>
                <Text style={styles.headerFont}>Create Session</Text>
                <Platforms selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
                <Text style={{color: 'white'}}>{selectedPlatform}</Text>
                <Games selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
                <Text style={{color: 'white'}}>{selectedGame}</Text>
                <SessionDescription gameDescription={gameDescription} setGameDescription={setGameDescription} />
                <Text style={{color: 'white'}}>{gameDescription}</Text>
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