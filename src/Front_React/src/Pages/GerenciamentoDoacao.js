import React, { useEffect } from 'react';
import Header from '../Componentes/Header';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import { Card, Text, Appbar, List } from 'react-native-paper';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';



import { useUser } from '../contexts/UseContext';

const GerenciamentoDoacao = () => {
  const { setSigned, nomeFantasia, Camp, SetCamp, idCodigo } = useUser();

  const hand = async () => {
    setSigned(false);

  };

  useEffect(() => {
    SetCamp(idCodigo)

  }, [idCodigo]);


  const renderItem = ({ item }) => (


    <Card.Title style={styles.card}
      title={<Text style={styles.letra}>{"Doação para " + item.nomeDaCampanha}</Text>}
      subtitle={<Text style={styles.descri}>{"Valor da Doação: R$ " + item.valor + " real/reais"}</Text>}
      left={(props) => <List.Icon {...props} color={item.tipoDoacao == '2' ? 'green' : 'red'} icon={item.tipoDoacao == '2' ? "credit-card" : "cash-check"} />}
    //right={(props) => <Text {...props} style={styles.tipo}>{item.tipoDoacao == '1' ? 'PIX' : 'Cartão de Crédito'}</Text>}

    />

  )



  return (
    <Container>
      <Appbar.Header>
        <Appbar.Content title={'Olá ' + nomeFantasia} />
        <Appbar.Action icon="exit-run" onPress={hand} />
      </Appbar.Header>
      <Body>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={Camp}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </Body>

    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    textAlign: 'center',
  },
  button: {
    marginBottom: 8,
    backgroundColor: '#DDD9CD',
    fontStyle: 'bolder'

  },
  textHeader: {
    textAlign: 'center'
  },
  header: {
    alignItems: "center",
    marginTop: 70,
    marginBottom: 12
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 10,
  },
  text: {
    textAlign: 'center',
    margin: 10,
  },
  tipo: {
    alignSelf: 'center',
    fontSize: 10
  },
  descri: {
    fontSize: 12
  },
  card: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFE9F5',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,


  },
  letra: {
    fontSize: 19,
  },
  sub: {
    fontSize: 11,
  },
});

export default GerenciamentoDoacao;












