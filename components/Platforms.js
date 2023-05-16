import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

export default function Platforms(props) {

    const [selected, setSelected] = useState("");

    // Set selected state to platform that user has selected
    
    const handleSelect = (value) => {
        setSelected(value);
        props.setSelectedPlatform(value);
    };

    // Platforms available 

    const data = [
        { key: '1', value: 'Playstation 5' },
        { key: '2', value: 'Playstation 4' },
        { key: '3', value: 'Xbox Series X/S' },
        { key: '4', value: 'Xbox One' },
        { key: '5', value: 'Nintendo Switch' },
        { key: '6', value: 'PC' },
        { key: '7', value: 'Mobile' },
        { key: '8', value: 'Other' },
    ]

    return (
        <View style={styles.container} >
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
        borderWidth: 0,
        borderColor: '#0088B4',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: 'black',
        width: 250,
        marginTop: 0
    },


    font: {
        color: '#0088B4',
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