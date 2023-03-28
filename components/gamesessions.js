import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameSessions() {
    return(
        <View>
            <Text style={styles.font}>Terrrve</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      
    },
  
    font: {
      color: 'white'
    },
  });