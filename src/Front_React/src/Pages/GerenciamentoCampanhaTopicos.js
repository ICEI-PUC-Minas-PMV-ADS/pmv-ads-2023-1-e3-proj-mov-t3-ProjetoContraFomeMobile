import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Container from '../Componentes/Container';
import { List, Text, FAB, Card, IconButton,Appbar } from 'react-native-paper';
import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UseContext';
import { View } from 'react-native-web';

const GerenciamentoCampanhaTopicos = () => {
  const { setSigned, gastos, idCampanha, setGastos } = useUser();
  const navigation = useNavigation();
  const hand = async () => {
    setSigned(false);

  };

  useEffect(() => {
    

    setGastos(idCampanha)

  }, []);

  const renderItem = ({ item }) => (

    //<Card onPress={() => navigation.navigate('GerenciamentoCampanha', { item })}>
    <Card.Title style={styles.card}
      title={<Text style={styles.letra} >{item.nomeDaCampanha}</Text>}
      subtitle={<Text style={styles.sub}>{item.descricaoDaCampanha} </Text>}
      left={(props) => <List.Icon style={styles.camp} {...props} color={'green'} icon="copyright" />}
      right={(props) => <IconButton {...props} color={'red'} icon={"file-edit"} onPress={() => navigation.navigate('GerenciamentoCampanha', { item })} />}

    />
    //</Card>


  );


  return (



    <Container>
      <Appbar.Header>
        <Appbar.Content title={'Cadastrar e Editar Campanhas'}/>
        <Appbar.Action icon="exit-run" onPress={hand} />
      </Appbar.Header>
      {/* <Header title={'Cadastrar e Editar Campanhas'} /> */}
      <Body>

      <Text style={gastos == '' ? styles.st : styles.st2}>Você não possui campanha cadastrada!</Text>

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
  card: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFE9F5',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 10,
    marginRight: 10,


  },
  letra: {
    fontSize: 19,
  },
  sub: {
    fontSize: 11,
  },
  st: {
    color: "black",
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    marginLeft:8,
    marginRight:8,
  },
  st2: {
    display: "none"
  }
});


export default GerenciamentoCampanhaTopicos;
