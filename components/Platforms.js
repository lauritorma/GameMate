import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

export default function Platforms(props) {

    const [selected, setSelected] = useState("");
    const [data, setData] = useState([]);

    // Fetch data from Firestore on component mount
    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const docRef = doc(db, "platformList", "platforms");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const dataList = Object.keys(docSnap.data()).map((platforms, index) => ({
                    key: `${index + 1}`,
                    value: platforms,
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
        props.setSelectedPlatform(value);
    };
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