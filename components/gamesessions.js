import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GameSessions() {
  const [gameSessions, setGameSessions] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [showPickers, setShowPickers] = useState(false);


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
            <Picker.Item label='Call of Duty: Warzone 2.0' value='Call of Duty: Warzone 2.0' />
            <Picker.Item label='Minecraft' value='Minecraft' />
            <Picker.Item label='NHL23' value='NHL23' />
            <Picker.Item label='Overwatch 2' value='Overwatch 2' />
            <Picker.Item label='Apex Legends' value='Apex Legends' />
            <Picker.Item label='CS: GO' value='CS: GO' />
            <Picker.Item label='Among Us' value='Among Us' />
          </Picker>
          <View style={styles.divider}></View>
          <Picker
            style={styles.picker}
            selectedValue={selectedPlatform}
            onValueChange={(itemValue) => setSelectedPlatform(itemValue)}
          >
            <Picker.Item label='All Platforms' value={null} />
            <Picker.Item label='Playstation 5' value='Playstation 5' />
            <Picker.Item label='Playstation 4' value='Playstation 4' />
            <Picker.Item label='Xbox Series X/S' value='Xbox Series X/S' />
            <Picker.Item label='Xbox One' value='Xbox One' />
            <Picker.Item label='Nintendo Switch' value='Nintendo Switch' />
            <Picker.Item label='PC' value='PC' />
            <Picker.Item label='Mobile' value='Mobile' />
            <Picker.Item label='Other' value='Other' />
          </Picker>
        </View>
      )}

      <ScrollView>
        {filteredGameSessions.map((session, index) => (
          <View key={index} style={styles.gameEntry}>
            <View style={styles.info}>
            <Text style={styles.timestamp}>{session.timestamp}</Text>
            <Text style={styles.username}>{session.username}</Text>
            </View>
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
    marginBottom: 40,
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
    marginBottom: 70,
    marginTop: 30,
    borderColor: 'white',
    borderWidth: 0.3,
    padding: 1,
    width: 300,
    textAlign: 'center',
    borderRadius: 10,

  },

  filterContainer: {
    borderColor: 'blue',
    marginBottom: 20,
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
    margin: 20,
    marginBottom: 20,
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
    
  }
});
