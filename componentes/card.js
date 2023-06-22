import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card(){
    return(
        <View style={styles.card}>
            <Image source={require('../imgs/coffee1.jpeg')} style={styles.image}/>
            <View style={styles.division}>
                <Text style={styles.texto}>Mocha</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 300,
      height: 300,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
  
    },
    card: {
      padding: '0px',
      borderRadius: 20,
    },
    division: {
      backgroundColor:'green',
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
    },
    texto:{
      color:'white', 
      display: 'flex', 
      justifyContent:"center", 
      alignItems:"center", 
      margin:'1rem', 
      fontSize:'1.2rem', 
      fontWeight: 'bold',
    }
  });