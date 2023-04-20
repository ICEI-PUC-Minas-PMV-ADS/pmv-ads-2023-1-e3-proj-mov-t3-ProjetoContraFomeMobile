import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Calculadora from './Calculadora';
import Gastos from './Gastos';

const Home2 = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'gastos', title: 'Gerenciar Doações', icon: 'chart-donut' },
    { key: 'calculadora', title: 'Cadastrar/Editar Campanhas', icon: 'account-edit' },
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