//ZONA1: Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

const Texto=(props)=> {
  const {contenido}=props
  return (
    <Text>{contenido}</Text>
  )
}
//ZONA2: MAIN
export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenido="Hola"> </Texto>
      <Texto contenido="Mundo"> </Texto>
      <Texto contenido="Read Native"> </Texto>
      <Button title="Presionar"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

//ZONA3: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
