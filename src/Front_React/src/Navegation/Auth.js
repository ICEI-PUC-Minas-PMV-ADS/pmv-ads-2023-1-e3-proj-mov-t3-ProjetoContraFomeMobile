import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
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