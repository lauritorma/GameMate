import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SessionDescription() {

    const [description, setDescription] = useState("");
    
    return(
        <View>
            <Text style={styles.font}>Description</Text>
            <TextInput
            style={styles.textInput}
            multiline={true}
            maxLength={100}
            numberOfLines={4}
            onChangeText={setDescription}
            ></TextInput>
            <Button
            title= 'publish'
            color='#0088B4'
            
            ></Button>
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
        marginBottom: 80

    },

    font: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20
    },


});