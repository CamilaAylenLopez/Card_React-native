import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './componentes/card'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./imgs/central_perk_logo.jpeg')} style={styles.imagen}/>
      <Text style={styles.texto}>Try some of our most popular flavors!</Text>
      <View style={{margin: '2rem'}}>
      <Card/>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imagen: {
    width: '80%',
    height: '25%',
    resizeMode: "contain",
  },
  texto: {
    fontWeight: 'bold',
    fontSize: "18px",
  }
});
