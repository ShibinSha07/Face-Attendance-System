import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';


const TeacherHomePage = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Teacher Name : </Text>
                <Text style={styles.headerText}>Department : </Text>
            </View>

            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cameraScreen')}>
                <Text style={styles.buttonText}>S1</Text>
            </TouchableOpacity> */}

            {['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'].map((item, index) => (
                <TouchableOpacity key={index} style={styles.button} onPress={() => { navigation.navigate('cameraScreen') }}>
                    <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
            ))}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    header: {
        // backgroundColor: '#6a5acd',
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 30,
        // alignItems: 'center',
        // height: 150,
        borderRadius: 5,
        marginBottom: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
    },
});

export default TeacherHomePage;
