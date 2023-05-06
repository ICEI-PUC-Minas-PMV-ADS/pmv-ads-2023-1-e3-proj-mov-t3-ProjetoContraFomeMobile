import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import GerenciamentoCampanhaTopicos from './GerenciamentoCampanhaTopicos';
import GerenciamentoDoacao from './GerenciamentoDoacao';

const HomeInterno = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'GerenciamentoDoacao', title: 'Gerenciar Doações', icon: 'chart-donut' },
    { key: 'GerenciamentoCampanhaTopicos', title: 'Cadastrar/Editar Campanhas', icon: 'account-edit' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    GerenciamentoDoacao: GerenciamentoDoacao,
    GerenciamentoCampanhaTopicos: GerenciamentoCampanhaTopicos,

  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default HomeInterno;