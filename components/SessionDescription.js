import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function SessionDescription(props) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Session Description'
                multiline={true}
                maxLength={100}
                numberOfLines={4}
                onChangeText={props.setGameDescription}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        borderColor: '#0088B4',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: 'black',
        width: 10,
        height: 150
    },

    textInput: {
        backgroundColor: 'white',
        width: 165,
        textAlign: 'center',
        padding: 5,
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 20

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


});