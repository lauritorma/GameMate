import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';

export default function SessionDescription(props) {

    const [description, setDescription] = useState("");


    return (
        <View>
            <Text style={styles.font}>Description</Text>
            <TextInput
                style={styles.textInput}
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
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',


    },

    textInput: {
        backgroundColor: 'white',
        width: 210,
        textAlign: 'center',
        padding: 5,
        borderRadius: 10,
        marginBottom: 30

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