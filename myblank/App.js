//ZONA1: Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto = () => {
  const [contenido, setContenido] = useState("Hola Mundo");
  const actualizaTexto = () => { setContenido('Estado Modificado'); };

  return (
    <Text onPress={actualizaTexto}>{contenido}</Text>
  );
}

//ZONA2: MAIN
export default function App() {
  return (
    <View style={styles.container}>
      <Texto />
      <Texto />
      <Texto />
      <Button title="Presionar" />
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
