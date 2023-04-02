import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Calculadora from './Calculadora';
import Gastos from './Gastos';

const Home2 = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'gastos', title: 'Gastos', icon: 'fuel'},
    { key: 'calculadora', title: 'Calculadora', icon: 'calculator'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    gastos: Gastos,
    calculadora: Calculadora,

  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    


  );
};

export default Home2;