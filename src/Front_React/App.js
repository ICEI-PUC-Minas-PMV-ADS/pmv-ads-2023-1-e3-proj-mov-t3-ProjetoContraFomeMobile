import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/Navegation/Route';
import UserProvider from './src/contexts/UseContext';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const App = () => {

  return (
    <UserProvider>
      < NavigationContainer>
      
      <StatusBar backgroundColor="black" 
                style="light" 
      />
        <Route />
      </NavigationContainer>
    </UserProvider>

  )
}

export default App;
