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
        <Text style={styles.headerText}>Subject</Text>
      </View>

      <View style={styles.sessionContainer}>
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
    backgroundColor: '#007bff',
    padding: 30,
    height: 120,
    width: '100%'
    },
 
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    padding: 35,
    color: 'white',
    fontWeight: 'bold'
},
  label: {
    fontSize: 25,
  },
  sessionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,

  },
  
  input: {
    alignItems: 'center',
    backgroundColor: 'white',
    fontSize: 25,
    width: '30%',
    height: 40,
    textAlign: 'center',
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
