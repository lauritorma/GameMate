import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';

export default function GameSessions({ games, platforms }) {
  const [gameSessions, setGameSessions] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [showPickers, setShowPickers] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const sendNotification = async () => {
    const permission = await Notifications.requestPermissionsAsync();
    if (!permission.granted) return;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "New game session 🎮",
        body: 'A new game session has been created!',
      },
      trigger: null,
    });
  }

  useEffect(() => {
    let previousGameSessions = [...gameSessions];
    const database = getDatabase();
    const gameSessionsRef = ref(database, 'gamesessions/');

    onValue(gameSessionsRef, (snapshot) => {
      if (snapshot.exists()) {
        const sessionsData = snapshot.val();
        const sessionsArray = Object.values(sessionsData);
        if (sessionsArray.length > previousGameSessions.length) {
          sendNotification();
        }
        previousGameSessions = sessionsArray;
        setGameSessions(sessionsArray.reverse());
      }
    });

    return () => off(gameSessionsRef);
  }, []);

  const filteredGameSessions = gameSessions.filter(
    (session) =>
      (!selectedGame || session.selectedGame === selectedGame) &&
      (!selectedPlatform || session.selectedPlatform === selectedPlatform)

  );



  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.pageHeader}>Game 🎮 Mate</Text>
      <Text style={styles.pageSubHeader}>Never Game Alone!</Text>
      <TouchableOpacity
        style={styles.pickerToggle}
        onPress={() => setShowPickers(!showPickers)}
      >
        <Text style={styles.pickerToggleText}>{showPickers ? 'Hide Filters' : 'Show Filters'}</Text>
      </TouchableOpacity>
      {showPickers && (
        <View style={styles.filterContainer} >
          <Picker
            style={styles.picker}
            selectedValue={selectedGame}
            onValueChange={(itemValue) => setSelectedGame(itemValue)}
          >
            <Picker.Item label='All Games' value={null} />
            {games && games.map((game, index) => <Picker.Item key={index} label={game} value={game} />)}
          </Picker>
          <View style={styles.divider}></View>
          <Picker
            style={styles.picker}
            selectedValue={selectedPlatform}
            onValueChange={(itemValue) => setSelectedPlatform(itemValue)}
          >
            <Picker.Item label='All Platforms' value={null} />
            {platforms && platforms.map((platform, index) => <Picker.Item key={index} label={platform} value={platform} />)}
          </Picker>
        </View>
      )}

      <ScrollView>
        {filteredGameSessions.map((session, index) => (
          <View key={index}>
            <TouchableOpacity key={index} style={styles.gameEntry} onPress={() => setSelectedSession(selectedSession === index ? null : index)}>
              <View style={styles.info}>
                <Text style={styles.timestamp}>{session.timestamp}</Text>
                <Text style={styles.username}>{session.username}</Text>
              </View>
              <Text style={styles.gameHeader}>Game</Text>
              <Text style={styles.gameInfo}>{session.selectedGame}</Text>
              <Text style={styles.gameHeader}>Platform</Text>
              <Text style={styles.gameInfo}>{session.selectedPlatform}</Text>
              {selectedSession === index && (
                <>
                  <Text style={styles.gameHeader}>Description</Text>
                  <Text style={styles.gameInfo}>{session.gameDescription}</Text>
                </>
              )}
            </TouchableOpacity>
            <View style={styles.divider}></View>
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
    alignItems: 'center'
  },

  font: {
    color: 'white',
    margin: 20,
    textAlign: 'center'
  },

  pageHeader: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  pageSubHeader: {
    color: 'grey',
    fontSize: 14,
    marginBottom: 20,
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

  info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  username: {
    color: 'white',
    textAlign: 'right',
    margin: 10,
    fontSize: 13,
  },

  timestamp: {
    color: 'white',
    textAlign: 'left',
    margin: 10,
    fontSize: 13,
  },

  gameEntry: {
    marginBottom: 50,
    marginTop: 50,
    borderColor: 'white',
    borderWidth: 0.3,
    padding: 1,
    width: 300,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#262626'

  },

  filterContainer: {
    borderColor: 'blue',
    marginBottom: 10,
    width: 300,
    alignItems: 'center'


  },

  filterLabel: {
    color: 'black',
  },

  picker: {
    color: 'white',
    backgroundColor: '#0088B4',
    margin: 10,
    width: 200,
    height: 60,

  },

  pickerToggle: {
    color: 'black',
    backgroundColor: '#0088B4',
    marginBottom: 15,
    marginTop: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0088B4',
    textAlign: 'center'
  },

  pickerToggleText: {
    color: 'white',
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold'
  },

  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  }
});
