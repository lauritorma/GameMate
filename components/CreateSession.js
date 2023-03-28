import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Platforms from './Platforms';
import Games from './Games';
import SessionDescription from './SessionDescription';

export default function CreateSession() {


    return (
        <View style={styles.container}>
            <View style={styles.creation}>
                <Platforms></Platforms> 
                <Games></Games>
                <SessionDescription></SessionDescription>
            </View>
        </View>
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

    creation: {
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        
    },

    selectList: {
        color: 'white'
    },
});