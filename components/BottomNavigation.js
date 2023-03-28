import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function ScreenOne() {
  return (
    <View style={styles.container}>
      <Text>Screen One</Text>
    </View>
  );
}

function ScreenTwo() {
  return (
    <View style={styles.container}>
      <Text>Screen Two</Text>
    </View>
  );
}

function ScreenThree() {
  return (
    <View style={styles.container}>
      <Text>Screen Three</Text>
    </View>
  );
}

export default function BottomNavigation() {
  return (
   
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Screen One') {
              iconName = 'ios-list';
            } else if (route.name === 'Screen Two') {
              iconName = 'ios-list-circle';
            } else if (route.name === 'Screen Three') {
              iconName = 'ios-archive';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { ...styles.tabBarStyle },
        })}
      >
        <Tab.Screen name="Screen One" component={ScreenOne} />
        <Tab.Screen name="Screen Two" component={ScreenTwo} />
        <Tab.Screen name="Screen Three" component={ScreenThree} />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'white',
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
