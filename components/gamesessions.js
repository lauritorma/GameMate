import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GameSessions() {
  const [gameSessions, setGameSessions] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const gameSessionsRef = ref(database, 'gamesessions/');

    const fetchGameSessions = (snapshot) => {
      if (snapshot.exists()) {
        const sessionsData = snapshot.val();
        const sessionsArray = Object.values(sessionsData);
        setGameSessions(sessionsArray.reverse());
      } else {
        setGameSessions([]);
      }
    };

    onValue(gameSessionsRef, fetchGameSessions);

    // Clean up the event listener
    return () => {
      // Detach the event listener when the component unmounts
      off(gameSessionsRef, 'value', fetchGameSessions);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageHeader}>Game 🎮 Mate</Text>
      <ScrollView>
        {gameSessions.map((session, index) => (
          <View key={index} style={styles.gameEntry}>
            <Text style={styles.timestamp}>{session.timestamp}</Text>
            <Text style={styles.gameHeader}>Game</Text>
            <Text style={styles.gameInfo}>{session.selectedGame}</Text>
            <Text style={styles.gameHeader}>Platform</Text>
            <Text style={styles.gameInfo}>{session.selectedPlatform}</Text>
            <Text style={styles.gameHeader}>Description</Text>
            <Text style={styles.gameInfo}>{session.gameDescription}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  font: {
    color: 'white',
    margin: 20,
    textAlign: 'center'
  },
  pageHeader: {
    color: 'white',
    fontSize: 25,
    marginBottom: 50,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  gameHeader: {
    color: 'white',
    margin: 7,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#0088B4',
    borderRadius: 5,
  },
  gameInfo: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 8,
    fontSize: 14,
  },
  timestamp: {
    color: 'white',
    textAlign: 'left',
    margin: 10,
    fontSize: 13,
  },
  gameEntry: {
    marginBottom: 70, // Adjust this value as needed
    borderColor: 'white',
    borderWidth: 0.3,
    padding: 1,
    width: 300,
    textAlign: 'center',
    borderRadius: 10,

  }
});
