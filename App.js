import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GameSessions from './components/GameSessions';
import CreateSession from './components/CreateSession';
import NewsFeed from './components/NewsFeed';

const Tab = createBottomTabNavigator();

function GameSessionsScreen() {
  return (
    <View style={styles.container}>
      <GameSessions></GameSessions>
    </View>
  );
}

function CreateSessionScreen() {
  return (
    <View style={styles.container}>
      <CreateSession></CreateSession>
    </View>
  );
}

function NewsFeedScreen() {
  return (
    <View style={styles.container}>
      <NewsFeed></NewsFeed>
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator

          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Games') {
                iconName = 'gamepad';
              } else if (route.name === 'Create') {
                iconName = 'plus-square';
              } else if (route.name === 'News') {
                iconName = 'newspaper';
              }

              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            tabBarActiveTintColor: '#0088B4',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { ...styles.tabBarStyle },
            headerStyle: {
              backgroundColor: '#0088B4',
              height: '6%',
            },
            headerTitleStyle: {
              color: '#0088B4',
            },
          })}


        >

          <Tab.Screen name="Games" component={GameSessionsScreen} />
          <Tab.Screen name="Create" component={CreateSessionScreen} />
          <Tab.Screen name="News" component={NewsFeedScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
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

  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    zIndex: 999,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
