import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from '../style';
import HomeCard from '../HomeCard/HomeCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.homeContainer}>
        <View style={styles.container}>
          <View style={styles.homeHeader}>
            <Text>Good Morning</Text>
            <Text style={{fontSize: 16, color: 'black'}}>Khayyam</Text>
            <View style={styles.homeContent}>
              <Text style={{fontSize: 25, color: 'black', fontWeight: '600'}}>
                How are you today?
              </Text>
            </View>
          </View>
          <View style={styles.homeBtns}>
            <TouchableOpacity style={styles.homeBtn}>
              <Text style={styles.homeBtnContent}>Checkup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeBtn}>
              <Text style={styles.homeBtnContent}>Consult</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.healthStatus}>
        <Text style={{color: 'black', fontSize: 16}}>Your condition</Text>
        <View style={styles.healthIcon}>
          <Text style={{color: '#0A6CFF', fontWeight: '600'}}>Health</Text>
        </View>
      </View>
      <HomeCard/>
    </SafeAreaView>
  );
}
