import React from 'react';
import AppNavigation from './components/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App = () => {
  return (
    <>
      <AppNavigation />
    </>
  );
};

export default App;
