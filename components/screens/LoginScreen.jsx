import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../style';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // if (email.trim() === 'a' && password.trim() === 'xeyyam123') {
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    // } else {
    //   alert('No route');
    // }
  };
  return (
    <View style={styles.login}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 10,
                color: '#0065FC',
                fontSize: 20,
              }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.loginHeader}>Login</Text>
        </View>
        <View style={styles.form}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Enter email"
          />
          <Text>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupRoute}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: '#0065FC', marginLeft: 5}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
