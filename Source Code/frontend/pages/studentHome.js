import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { server_url } from '../utils/function';
// import AppContext from '../utils/context';

const StudentHomePage = () => {
    // const { setSub } = useContext(AppContext);
    const navigation = useNavigation();

    const [studentPerc, setStudentPerc] = useState([]);

    // Sample data containing subject names and their respective percentages
    // const subjectData = [
    //     { name: 'Subject 1', percentage: 80 },
    //     { name: 'Subject 2', percentage: 65 },
    //     { name: 'Subject 3', percentage: 75 },
    //     { name: 'Subject 4', percentage: 90 },
    //     { name: 'Subject 5', percentage: 85 },
    //     { name: 'Subject 6', percentage: 70 },
    // ];

    useEffect(() => {
        fetchAttendanceData();
    }, []); // Fetch data on component mount

    const fetchAttendanceData = async () => {
        try {
            const response = await fetch(`${server_url}/1/get_attendance`);
            const data = await response.json();
            console.log(data);
            setStudentPerc(data);
        } catch (error) {
            console.error('Error fetching attendance data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Student Name</Text>
                {/* <Text style={styles.headerText}>Department</Text> */}
            </View>

            {/* Render subject buttons with their respective percentages */}
            {/* {subjectData.map((subject, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    // onPress={() => setSub(subject.name.charAt(subject.name.length - 1))}
                >
                    <Text style={styles.buttonText}>{subject.name}                                     {subject.percentage}%</Text>
                </TouchableOpacity>
            ))} */}
            <View style={styles.row} >
                {studentPerc.map((e) => (
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Subject</Text>
                        <Text>{`${e} %`}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        backgroundColor: '#007bff',
        padding: 30,
        height: 120,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        gap: 200,
    },
    buttonText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
    },
    // subSession: {
    //     flexDirection: 'row',
    //     gap: 50,
    //     padding: 10
    // }
});

export default StudentHomePage;
