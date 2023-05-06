import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeInterno from '../Pages/HomeInterno';
import GerenciamentoDoacao from '../Pages/GerenciamentoDoacao';
import GerenciamentoCampanha from '../Pages/GerenciamentoCampanha';

const Stack = createNativeStackNavigator();

const Autenticado = () => {
  return (
    <Stack.Navigator initialRouteName="HomeInterno">
      <Stack.Screen
        name="HomeInterno"
        component={HomeInterno}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="GerencimantoDoacao"
        component={GerenciamentoDoacao}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="GerenciamentoCampanha"
        component={GerenciamentoCampanha}
        options={{
          header: () => null,
        }}
      />

    </Stack.Navigator>
  );
};
export default Autenticado;
