import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AttendanceScreen = () => {


    const data = [
    { name: 'Mashood', attendance: true },
    { name: 'Rohan', attendance: true },
    { name: 'Shibinsha', attendance: false },
    // Add more data here...
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Attendance details</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
  },
  header: {
    backgroundColor: 'purple',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  body: {
    backgroundColor: 'white',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
});

export default AttendanceScreen;
