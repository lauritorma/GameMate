import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

export default function Games(props) {

    const [selected, setSelected] = useState("");
    const [data, setData] = useState([]);

    // Fetch data from Firestore on component mount
    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const docRef = doc(db, "gameList", "games");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const dataList = Object.keys(docSnap.data()).map((games, index) => ({
                    key: `${index + 1}`,
                    value: games,
                }));
                setData(dataList);
            } else {
                console.log("No such document!");
            }
        };
        fetchData();
    }, []);

    // Set selected state
    const handleSelect = (value) => {
        setSelected(value);
        props.setSelectedGame(value);
    };

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