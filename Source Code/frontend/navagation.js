import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import loginScreen from './pages/loginScreen.js';
import signUp from './pages/signUp.js';
import teacherHome from './pages/teacherHome.js';
import cameraScreen from './pages/cameraScreen.js';
import camera from './pages/camera.js';
import attendance from './pages/attendance.js';



const Stack=createNativeStackNavigator()
export default function Navigation(){
    return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerShown:false
      }}>
        <Stack.Screen name="loginScreen" component={loginScreen} />
        <Stack.Screen name="signUp" component={signUp} /> 
        <Stack.Screen name="teacherHome" component={teacherHome} /> 
        <Stack.Screen name="cameraScreen" component={cameraScreen} /> 
        <Stack.Screen name="camera" component={camera} /> 
        <Stack.Screen name="attendance" component={attendance} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
    )
}