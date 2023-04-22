import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Senha from '../Pages/Senha';
import Register from '../Pages/Register';
import Campanhas from '../Pages/Campanhas'
import Privacidade from '../Pages/Privacidade';

const Stack = createNativeStackNavigator();


const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Senha"
        component={Senha}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Campanhas"
        component={Campanhas}
        options={{
          header: () => null,
        }}
      />
           <Stack.Screen
        name="Privacidade"
        component={Privacidade}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
