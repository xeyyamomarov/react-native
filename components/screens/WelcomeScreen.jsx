import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../style';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.welcome}>
      <View style={styles.welcomeContainer}>
        <View style={{alignItems: 'flex-end',}}>
          <Text style={styles.welcomeText}>Transforming</Text>
          <Text style={styles.welcomeText}>Healthcare</Text>
        </View>

        <View>
          <Image
            style={styles.welcomeImg}
            source={require('../../assets/health.png')}
          />
        </View>
        <View style={styles.signContainer} >
          <TouchableOpacity style={styles.signBtn} onPress={()=>navigation.navigate("Login")}  >
            <Text style={styles.signText} >Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signBtn} onPress={()=>navigation.navigate("SignUp")}  >
            <Text style={styles.signText}  >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
