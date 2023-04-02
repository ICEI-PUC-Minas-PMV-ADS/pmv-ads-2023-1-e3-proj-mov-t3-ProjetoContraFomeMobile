import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home2 from '../Pages/Home2';
import Abastecimento from '../Pages/Abastecimento';
const Stack = createNativeStackNavigator();

const Main2 = () => {
  return (
    <Stack.Navigator initialRouteName= "Home">
      <Stack.Screen
        name="Home"
        component={Home2}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Abastecimento"
        component={Abastecimento}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main2;
