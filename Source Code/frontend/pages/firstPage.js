import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Image } from "react-native";


const FirstPage = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.body}>

            <Text style={styles.heading}><Text style={{ color: '#007bff' }}>Smart</Text> Attendance</Text>

            <Image source={require('../assets/firstScreen.png')}
                style={{ width: 300, height: 200 , marginTop: 100, marginLeft: 20}}
            />

            <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate('loginScreen')}>
                <Text style={{ color: 'black', fontSize: 20 }}>Get Started >></Text>
            </TouchableOpacity>


        </View>
    )

}


const styles = StyleSheet.create({
    body: {
        backgroundColor: 'aliceblue',
        flex: 1,
        padding: 10

    },
    heading: {
        fontSize: 45,
        marginTop: 200,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        // backgroundColor: 'blue',
        // width: '35%',
        padding: 10,
        borderRadius: 5,
        marginTop: 150,
        marginLeft: 200

    }
})


export default FirstPage;

// style={styles.buttonText}