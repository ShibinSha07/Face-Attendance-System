import React, { useState } from 'react'
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Manual = () => {
    const navigation = useNavigation();

    const data = [
        { name: 'Mashood', attendance: true },
        { name: 'Rohan', attendance: true },
        { name: 'Shibinsha', attendance: false },
        { name: 'Bassam', attendance: true },
        { name: 'Ram', attendance: false },
        { name: 'Ravi', attendance: true },
        { name: 'Krishna', attendance: false },
        { name: 'Noel', attendance: true },
        { name: 'Fathima', attendance: false },
        { name: 'Farshad', attendance: true },
        { name: 'Ganga', attendance: true },
        { name: 'Majidha', attendance: false },
        { name: 'Murali', attendance: false },
        { name: 'Pradeeb', attendance: true },
        { name: 'Avinash', attendance: true },
        { name: 'Fida', attendance: false },
        { name: 'Muhammed', attendance: false },
        { name: 'Fethlana', attendance: true },
        { name: 'Jamsheer', attendance: false },
        { name: 'Nived', attendance: true },
        { name: 'Majid', attendance: false },
        { name: 'Pradeeb', attendance: true },
        { name: 'Avinash', attendance: true },
        { name: 'Fida', attendance: false },
        { name: 'Muhammed', attendance: false },
        { name: 'Fethlana', attendance: true },
        { name: 'Jamsheer', attendance: false },
        { name: 'Nived', attendance: true },
        { name: 'Majid', attendance: false },

    ];

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (index) => {
        const newData = [...data];
        newData[index].attendance = !newData[index].attendance;
        setIsChecked(newData[index].attendance);
    };
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Mark the Attendance</Text>
            </View>

            <ScrollView>
                <View style={styles.headerRow}>
                    <Text style={styles.headText}>Roll No.</Text>
                    <Text style={styles.headText}>Name</Text>
                    <Text style={styles.headText}>Attendance</Text>
                </View>

                <View style={styles.body}>

                    {data.map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text style={styles.cell}>{index + 1}</Text>
                            <Text style={styles.cell}>{item.name}</Text>
                            <Text style={styles.cell}>{item.attendance ? '✅' : '❌'}</Text>

                        </View>
                    ))}

                </View>
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        height: 100
    },
    headerText: {
        textAlign: 'center',
        fontSize: 25,
        padding: 35,
        color: 'white',
        fontWeight: 'bold'
    },
    headerRow: {
        paddingTop: 10,
        marginLeft: 10,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    headText: {
        marginRight: 70,
        fontSize: 16,
        fontWeight: 'bold'
    },
    body: {
        backgroundColor: 'white',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginLeft: 10
    },
    cell: {
        flex: 1,
        fontSize: 16,
        // marginRight: 10
    },
})

export default Manual;