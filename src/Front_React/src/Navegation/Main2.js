import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home2 from '../Pages/Home2';
import Abastecimento from '../Pages/Abastecimento';
import Gastos from '../Pages/Gastos';
import CadastroCampanha from '../Pages/CadastroCampanha';

const Stack = createNativeStackNavigator();

const Main2 = () => {
  return (
    <Stack.Navigator initialRouteName="Home2">
      <Stack.Screen
        name="Home2"
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
      <Stack.Screen
        name="Gastos"
        component={Gastos}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="CadastroCampanha"
        component={CadastroCampanha}
        options={{
          header: () => null,
        }}
      />

    </Stack.Navigator>
  );
};

export default Main2;
