import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';

export default function SessionDescription(props) {

    const [description, setDescription] = useState("");

    
    return(
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
        width: 200,
        textAlign: 'center',
        padding: 5,
        borderRadius: 10,
        marginBottom: 30

    },

    font: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        marginBottom: 20,
        marginTop: 20
    },


});