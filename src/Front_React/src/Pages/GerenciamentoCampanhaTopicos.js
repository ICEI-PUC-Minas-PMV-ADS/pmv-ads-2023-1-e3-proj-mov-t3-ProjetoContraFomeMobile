import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Container from '../Componentes/Container';
import { List, Text, FAB } from 'react-native-paper';
import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UseContext';

const GerenciamentoCampanhaTopicos = () => {
  const { gastos, idCampanha, setGastos } = useUser();
  const navigation = useNavigation();

  useEffect(() => {

    setGastos(idCampanha)

  }, []);

  const renderItem = ({ item }) => (

    <List.Item
      title={item.nomeDaCampanha}
      description={item.descricaoDaCampanha}
      left={props => <List.Icon {...props} color={'green'} icon="copyright" />}
      right={props => <Text {...props} style={styles.tipo}>{'Editar ou Exluir? Click aqui!!'}</Text>}

      onPress={() => navigation.navigate('GerenciamentoCampanha', { item })}
    />

  );
  return (
    <Container>
      <Header title={'Cadastrar e Editar Campanhas'} />
      <Body>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={gastos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('GerenciamentoCampanha')}
        />

      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
  },
  text: {
    textAlign: 'center',
    margin: 10,
  },
  tipo: {
    fontSize: 10,
    color: 'green'
  },
});


export default GerenciamentoCampanhaTopicos;
