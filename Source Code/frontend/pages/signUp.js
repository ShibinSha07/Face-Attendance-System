import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {

  const navigation = useNavigation();

  const [fullname, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [registernumber, setRegnumber] = useState('');
  const [college, setCollege] = useState('');
  const [admissionno, setAdmsnNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subTitle}>Smart Attendence System</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullname}
        onChangeText={setName}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Department"
        value={department}
        onChangeText={setDepartment}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Register Number"
        value={registernumber}
        onChangeText={setRegnumber}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="College"
        value={college}
        onChangeText={setCollege}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Admission No."
        value={admissionno}
        onChangeText={setAdmsnNo}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('loginScreen')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
    paddingLeft: 15,
    borderRadius: 5,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
