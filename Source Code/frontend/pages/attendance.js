import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { server_url } from '../utils/function';
import AppContext from '../utils/context';

const AttendanceScreen = () => {
  const { sub, session } = useContext(AppContext);
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    fetchAttendanceData();
  }, []); // Fetch data on component mount

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch(`${server_url}/${sub}/${session}/attendance_list`);
      const data = await response.json();
      console.log(data);
      setStudentList(data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Attendance details <Text>S6 CSE</Text></Text>
      </View>

      <ScrollView>
        <View style={styles.headerRow}>
          <Text style={styles.headText}>Roll No.</Text>
          <Text style={styles.headText}>Name</Text>
          <Text style={styles.headText}>Attendance</Text>
        </View>

        <View>
          {studentList.map((e, index) => (
            <View style={styles.row} key={index}>
              <Text>{`${e[0]}`}</Text>
              <Text>{`${e[1]}`}</Text>
              {/* <Text>{{`${e[2]}`}==='present' ?  '✅' : '❌'}</Text> */}
              <Text>{`${e[2]}` === 'present' ? '✅' : '❌'}</Text>

            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  header: {
    backgroundColor: '#007bff',
    padding: 30,
    height: 120
  },
  headerText: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerRow: {
    padding: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  headText: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  body: {
    backgroundColor: 'white',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    // marginLeft: 10
  },
  cell: {
    flex: 1,
    fontSize: 16,
    // marginRight: 10
  },
});

export default AttendanceScreen;



// import React, { useContext,useSt } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { server_url } from '../utils/function';
// import AppContext from '../utils/context'


// const AttendanceScreen = () => {
//   const { sub,session } = useContext(AppContext)
// const res=fetch(`${server_url}/${sub}/${session}/attendance_list`)
// console.log(res.data)
// const temp=res.data



//   const data = [
//     { name: 'Mashood', attendance: true },
//     { name: 'Rohan', attendance: true },
//     { name: 'Shibinsha', attendance: false },
//     { name: 'Bassam', attendance: true },
//     { name: 'Ram', attendance: false },
//     { name: 'Ravi', attendance: true },
//     { name: 'Krishna', attendance: false },
//     { name: 'Noel', attendance: true },
//     { name: 'Fathima', attendance: false },
//     { name: 'Farshad', attendance: true },
//     { name: 'Ganga', attendance: true },
//     { name: 'Majidha', attendance: false },
//     { name: 'Murali', attendance: false },
//     { name: 'Pradeeb', attendance: true },
//     { name: 'Avinash', attendance: true },
//     { name: 'Fida', attendance: false },
//     { name: 'Muhammed', attendance: false },
//     { name: 'Fethlana', attendance: true },
//     { name: 'Jamsheer', attendance: false },
//     { name: 'Nived', attendance: true },
//     { name: 'Majid', attendance: false },
//     { name: 'Pradeeb', attendance: true },
//     { name: 'Avinash', attendance: true },
//     { name: 'Fida', attendance: false },
//     { name: 'Muhammed', attendance: false },
//     { name: 'Fethlana', attendance: true },
//     { name: 'Jamsheer', attendance: false },
//     { name: 'Nived', attendance: true },
//     { name: 'Majid', attendance: false },

//   ];

//   return (
//     <View style={styles.container}>

//       <View style={styles.header}>
//         <Text style={styles.headerText}>Attendance details               <Text>S6   CSE</Text></Text>
//       </View>

//       <ScrollView>
//         <View style={styles.headerRow}>
//           <Text style={styles.headText}>Roll No.</Text>
//           <Text style={styles.headText}>Name</Text>
//           <Text style={styles.headText}>Attendance</Text>
//         </View>

//         {/* <View style={styles.body}>

//           {data.map((item, index) => (
//             <View key={index} style={styles.row}>
//               <Text style={styles.cell}>{index + 1}</Text>
//               <Text style={styles.cell}>{item.name}</Text>
//               <Text style={styles.cell}>{item.attendance ? '✅' : '❌'}</Text>
//             </View>
//           ))}

//         </View> */}
//         <View>
//           {temp.map((e)=>{
//             <Text>
//               {`${e[0]} ${e[1]}` }
//             </Text>
//           })}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     flex: 1,
//   },
//   header: {
//     backgroundColor: '#007bff',
//     padding: 30,
//     height: 120
//   },
//   headerText: {
//     marginTop: 20,
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
//   headerRow: {
//     paddingTop: 10,
//     marginLeft: 10,
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'white'
//   },
//   headText: {
//     marginRight: 70,
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   body: {
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//     marginLeft: 10
//   },
//   cell: {
//     flex: 1,
//     fontSize: 16,
//     // marginRight: 10
//   },

// });

// export default AttendanceScreen;
