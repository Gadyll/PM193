// a. Importamos las librerías instaladas
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// b. Importamos los Screens creados
import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';

// c. Creamos un objeto Stack
const Stack = createNativeStackNavigator();

// d. Componente principal con NavigationContainer y Stack.Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Settings" component={Settings} options={{ title: 'Configuración' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
