import React, { useState } from 'react'
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, Touchable, TouchableOpacity } from 'react-native';

const Manual = () => {
    const navigation = useNavigation();


    const toggleAttendance = (index) => {
        setAttendanceData((prevData) => {
            const newData = [...prevData];
            newData[index].attendance = !newData[index].attendance;
            return newData;
        });
    };

    const [attendanceData, setAttendanceData] = useState( [
        { name: 'Mashood', attendance: true },
        { name: 'Rohan', attendance: true},
        { name: 'Shibinsha', attendance: true},
        { name: 'Bassam', attendance: true},
        { name: 'Ram', attendance: true},
        { name: 'Ravi', attendance: true},
        { name: 'Krishna' , attendance: true},
        { name: 'Noel' , attendance: true},
        { name: 'Fathima', attendance: true },


    ]);

    

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

                    {attendanceData.map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text style={styles.cell}>{index + 1}</Text>
                            <Text style={styles.cell}>{item.name}</Text>
                            {/* <TouchableOpacity  onPress={toggleSwitch}>
                                <Text style={styles.cell}>{item.attendance ? '❌' : '✅'}</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity onPress={() => toggleAttendance(index)}>
                                <Text style={styles.cell}>{item.attendance ? '✅' : '❌'}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>
                {/* <Text style={styles.cell}>{item.attendance ? '✅' : '❌'}</Text> */}
                {/* <TouchableOpacity onValueChange={toggleSwitch}
                    value={isEnabled}> 
                  <Text>{isEnabled ? '✅' : '❌'}</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={toggleSwitch}>
                        <Text>
                            {toggleState ? '✅' : '❌'}
                        </Text>
                    </TouchableOpacity> */}

            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#007bff',
        padding: 30,
        height: 120
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