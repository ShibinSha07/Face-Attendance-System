import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, Switch } from 'react-native';
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import AppContext from '../utils/context';

const LoginScreen = () => {

  const navigation = useNavigation();

  const { email, setEmail, username, setUsername, password, setPassword } = useContext(AppContext);



  // const handleLogin = () => {
  //   // Implement your login logic here
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };


  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Text style={styles.maintitle}>{isEnabled ? 'Student' : 'Teacher'}</Text>
        <Text style={styles.title}>Login </Text>
      </View>

      <Text style={styles.subTitle}>Smart Attendence System</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => isEnabled ? navigation.navigate('studentHome') : navigation.navigate('teacherHome')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={{ marginBottom: 100 }}>{isEnabled ? <Text style={styles.account}>Don't have an Account? <Text style={styles.signup} onPress={() => navigation.navigate('signUp')}>SignUp</Text></Text>
        : ''}</Text>
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#007bff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
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
  container1: {
    flexDirection: 'row',
    gap: 8,
    textAlign: 'center'
  },
  maintitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007bff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 3
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 50
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 10,
  },
  button: {
    width: '80%',
    height: 50,
    // backgroundColor: '#007bff',
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  }, text: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  account: {
    color: 'blue',
    alignItems: 'flex-start',
    marginBottom: 120,
  },
  signup: {
    color: 'black'
  }
});

export default LoginScreen;