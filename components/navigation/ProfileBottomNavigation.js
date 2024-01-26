import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();


export default function ProfileBottomNavigation() {
  return (
      <Tab.Navigator initialRouteName='Welcome'>
        <Tab.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      </Tab.Navigator>
  )
}