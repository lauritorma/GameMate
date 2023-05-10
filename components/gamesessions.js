import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CreateSession from './CreateSession';
import { getDatabase, ref } from 'firebase/database';

export default function GameSessions() {

  const getGameSessions = () => {
    
  }

    return(
        <View>
            <Text style={styles.font}>Here will be gamelist</Text>
            
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