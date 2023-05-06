import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AcessoLogar from '../Pages/AcessoLogar';
import AcessoRegistrar from '../Pages/AcessoRegistrar';
import CampanhasCadastradas from '../Pages/CampanhasCadastradas';
import AcessoDoacao from '../Pages/AcessoDoacao';
import HomeExterno from '../Pages/HomeExterno';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeExterno"
        component={HomeExterno}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AcessoLogar"
        component={AcessoLogar}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AcessoRegistrar"
        component={AcessoRegistrar}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AcessoDoacao"
        component={AcessoDoacao}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="CampanhasCadastradas"
        component={CampanhasCadastradas}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
