import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import AppContext from '../utils/context';

const CameraScreen = () => {

  const navigation = useNavigation();


  const { setSession } = useContext(AppContext)


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Semester</Text>
      </View>

      <View style={styles.sessionContainer}>
        <Text style={styles.label}>Session :</Text>
        <TextInput
          style={styles.input}
          placeholder="Session"
          onChangeText={setSession}
          keyboardType='numeric'
        />
      </View>

      <TouchableOpacity style={styles.cameraIcon} onPress={() => navigation.navigate('camera')} >
        <Icon name="camera-outline" size={100} color="#000" />
      </TouchableOpacity>

      <View style={styles.session2}>

        <TouchableOpacity style={styles.manual} onPress={() => navigation.navigate('manual')}>
          <Text style={{ fontSize: 25, color: '#000', }}>Manual</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 5, padding: 10 }}
          onPress={() => navigation.navigate('attendance')}>
          <Text style={{ fontSize: 25, color: '#000' }}>Check</Text>
        </TouchableOpacity>

      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'aliceblue'

  },
  header: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: '#9181F4'
    backgroundColor: '#007bff'
  },
  headerText: {
    fontSize: 50,
    marginTop: 50,
    color: 'white',
    fontWeight: 'bold',

  },
  label: {
    fontSize: 25,
  },
  sessionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 50,

  },
  
  input: {
    // flex: 1,
    backgroundColor: 'white',
    fontSize: 18,
    width: '20%',
  },

  cameraIcon: {
    marginTop: 100,
    marginBottom: 50
  },
  session2: {
    marginTop: 100,
    flexDirection: 'row',
    gap: 50
  },
  manual: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    // marginBottom: 50
  },

})

export default CameraScreen;
