import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';


const TeacherHomePage = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Teacher Name</Text>
                <Text style={styles.headerText}>Department</Text>
            </View>
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cameraScreen')}>
                <Text style={styles.buttonText}>S1</Text>
            </TouchableOpacity> */}
            {['S1', 'S2', 'S3', 'S4', 'S5', 'S6'].map((item, index) => (
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
        backgroundColor: '#6a5acd',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
    },
});

export default TeacherHomePage;
