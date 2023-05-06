import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import HomeExterno_Botoes from './HomeExterno_Botoes';
import Privacidade from './Privacidade';
import Termo from './TermoDeUso';
import Contato from './EntreEmContato';
import Sobre from './SobreNos';

const HomeExterno = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'HomeExterno_Botoes', title: 'Home', icon: 'home' },
    { key: 'privacidade', title: 'Privacidade', icon: 'police-badge' },
    { key: 'sobre', title: 'Sobre Nós', icon: 'account-supervisor' },
    { key: 'termo', title: 'Termo', icon: 'paperclip' },
    { key: 'contato', title: 'Contato', icon: 'phone-cancel' },

  ]);
  const renderScene = BottomNavigation.SceneMap({
    HomeExterno_Botoes: HomeExterno_Botoes,
    privacidade: Privacidade,
    termo: Termo,
    contato: Contato,
    sobre: Sobre,

  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
export default HomeExterno;