import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


import Login from './Login';
import Privacidade from './Privacidade';
import Termo from './TermoDeUso';
import Contato from './EntreEmContato';
import Sobre from './SobreNos';

const Home = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'login', title: 'Home', icon: 'home'},
    { key: 'privacidade', title: 'Privacidade', icon: 'police-badge'},
    { key: 'sobre', title: 'Sobre Nós', icon: 'account-supervisor'},
    { key: 'termo', title: 'Termo', icon: 'paperclip'},
    { key: 'contato', title: 'Contato', icon: 'phone-cancel'},

   
  ]);

  const renderScene = BottomNavigation.SceneMap({
    login: Login,
    privacidade: Privacidade,
    termo: Termo,
    contato: Contato,
    sobre:Sobre,

  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;