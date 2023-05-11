import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

export default function Platforms(props) {

    const [selected, setSelected] = useState("");

    const handleSelect = (value) => {
        setSelected(value);
        props.setSelectedPlatform(value);
    };

    const data = [
        { key: '1', value: 'Playstation 5' },
        { key: '2', value: 'Playstation 4' },
        { key: '3', value: 'Xbox Series X/S' },
        { key: '4', value: 'Xbox One' },
        { key: '5', value: 'Nintendo Switch' },
        { key: '6', value: 'PC' },
        { key: '7', value: 'Other' },
    ]

    return (
        <View >
            <Text style={styles.font}>Platform</Text>
            <SelectList
                setSelected={handleSelect}
                data={data}
                save="value"
                dropdownItemStyles={{ backgroundColor: 'white' }}
                dropdownStyles={styles.dropdownContent}
                textStyle={styles.dropdownText}
                placeholder="Select platform"
                boxStyles={{ backgroundColor: 'white' }}
            />
        </View>
    );

};



const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 1000,
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
        marginTop: 10,
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
        color: 'black',
        backgroundColor: 'white',

    },
});