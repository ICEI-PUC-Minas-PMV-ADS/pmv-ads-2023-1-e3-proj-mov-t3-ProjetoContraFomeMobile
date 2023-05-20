import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import HomeExterno_Botoes from './HomeExterno_Botoes';
import Termo from './TermoDeUso';
import AcessoLogar from './AcessoLogar';
import Sobre from './SobreNos';

const HomeExterno = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'HomeExterno_Botoes', title: 'Home', icon: 'home' },
    //{ key: 'privacidade', title: 'Privacidade', icon: 'police-badge' },
    { key: 'sobre', title: 'Sobre Nós', icon: 'account-supervisor' },
    { key: 'AcessoLogar', title: 'Login Da Ong', icon: 'login' },
    //{ key: 'contato', title: 'Contato', icon: 'phone-cancel' },

  ]);
  const renderScene = BottomNavigation.SceneMap({
    HomeExterno_Botoes: HomeExterno_Botoes,
    //privacidade: Privacidade,
    AcessoLogar: AcessoLogar,
    //contato: Contato,
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