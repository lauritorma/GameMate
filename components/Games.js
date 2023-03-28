import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

export default function Games() {

    const Dropdown = () => {

        const [selected, setSelected] = useState("");

        const data = [
            { key: '1', value: 'Call of Duty' },
            { key: '2', value: 'Minecraft' },
            { key: '3', value: 'NHL23' },
            { key: '4', value: 'Overwatch'},
            { key: '5', value: 'Doom' },
            { key: '6', value: 'Monopoly' },
            { key: '7', value: 'Tetris' },
        ]
        return (
            <View >
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                style={styles.dropdown}
                dropdownItemStyles={{backgroundColor: 'white'}}
                dropdownStyles={styles.dropdownContent}
                textStyle={styles.dropdownText}
                inputStyles={styles.input}
                placeholder="Select game"
                boxStyles={{backgroundColor: 'white'}}
                
                
            />
            </View>
        );
    }

    return(
        <View>
            <Text style={styles.font}>Game</Text>
            <Dropdown></Dropdown>
        </View>
    )

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
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20
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