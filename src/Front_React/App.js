import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/Navegation/Route';
import UserProvider from './src/contexts/UseContext';



const App = () => {

  return (
    <UserProvider>
      < NavigationContainer>
        <Route/>
      </NavigationContainer>
    </UserProvider>

  )
}

export default App;
