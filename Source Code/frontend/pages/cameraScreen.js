import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can use any icon library
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';


const CameraScreen = () => {

  const navigation = useNavigation();

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8a2be2' }}>
      {/* <Text style={{ fontSize: 20, color: '#fff' }}>Camera or manual</Text> */}
      <Text style={{ fontSize: 50, color: '#fff', marginVertical: 20 }}>Semester</Text>
      <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.navigate('camera')}>
        <Icon name="camera-outline" size={70} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}>
        <Text style={{ fontSize: 20, color: '#000' }}>MANUAL</Text>
      </TouchableOpacity>
      {/* <View style={{width:50}}></View> */}
       <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}
        onPress={() => navigation.navigate('attendance')}>
        <Text style={{ fontSize: 20, color: '#000' }}>Check</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
