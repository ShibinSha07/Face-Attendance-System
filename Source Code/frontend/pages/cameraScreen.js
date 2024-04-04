import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';


const CameraScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Semester</Text>
      </View>


      <TouchableOpacity style={styles.cameraIcon}>
        <Icon name="camera-outline" size={100} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.manual}>
        <Text style={{ fontSize: 25, color: '#000', }}>Manual</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}
        onPress={() => navigation.navigate('attendance')}>
        <Text style={{ fontSize: 25, color: '#000' }}>Check</Text>
      </TouchableOpacity>

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
    backgroundColor: 'blue'
  },
  headerText: {
    fontSize: 50,
    marginTop: 50,
    color: 'white',
    fontWeight: 'bold',
    
  },
  cameraIcon: {
    marginTop: 100,
    marginBottom: 50
  },
  manual: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 50
  },

})

export default CameraScreen;
