import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // Implement your login logic here
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login </Text>
      <Text style={styles.subTitle}>Smart Attendence System</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        // value={username}
        onChangeText={setUsername}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('teacherHome')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.account}>Don't have an Account? <Text style={styles.signup} onPress={() => navigation.navigate('signUp')}>SignUp</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    width: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 5,
  },
  button: {
    width: '80%',
    height: 50,
    // backgroundColor: '#007bff',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 30
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  account: {
    color: 'blue',
    alignItems: 'flex-start'
  },
  signup:{
    color: 'black'

  }
});

export default LoginScreen;


