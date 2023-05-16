import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

export default function Games(props) {

    const [selected, setSelected] = useState("");

     // Set selected state to game that user has selected

    const handleSelect = (value) => {
        setSelected(value);
        props.setSelectedGame(value);
    };

    // Games available

    const data = [
        { key: '1', value: 'Call of Duty: Warzone 2.0' },
        { key: '2', value: 'Minecraft' },
        { key: '3', value: 'NHL23' },
        { key: '4', value: 'Overwatch 2' },
        { key: '5', value: 'Apex Legends' },
        { key: '6', value: 'CS: GO' },
        { key: '7', value: 'Among Us' },
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Game</Text>
            <SelectList
                setSelected={handleSelect}
                data={data}
                save="value"
                style={styles.dropdown}
                dropdownItemStyles={{ backgroundColor: 'white' }}
                dropdownStyles={styles.dropdownContent}
                textStyle={styles.dropdownText}
                inputStyles={styles.input}
                placeholder="Select game"
                boxStyles={{ backgroundColor: 'white' }}


            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        borderColor: '#0088B4',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: 'black',
        width: 250
    },

    font: {
        color: '#0088B4',
        marginBottom: 10,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 5,
        width: 150,
        padding: 5
    },

    selectList: {
        color: 'black'
    },

    dropdown: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 8,
    },

    dropdownContent: {
        marginTop: 4,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        backgroundColor: 'white',
        width: 200,
    },

    dropdownText: {
        fontSize: 16,
        color: '#333',
    },

    input: {
        color: 'black'
    },
});