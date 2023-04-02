import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Senha from '../Pages/Senha';
import Register from '../Pages/Register';

const Stack = createNativeStackNavigator();


const Main = () => {
  return (
    <Stack.Navigator initialRouteName= "Home">
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
    </Stack.Navigator>
  );
};

export default Main;
