import React, { useEffect } from 'react';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import { Card, Text, Appbar, List } from 'react-native-paper';
import { FlatList, StyleSheet, SafeAreaView, View } from 'react-native';

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
    <View style={styles.card}>
      <List.Icon color={item.tipoDoacao == '2' ? 'green' : 'red'} icon={item.tipoDoacao == '2' ? "credit-card" : "cash-check"} />
      <View style={styles.containerA}>
        <Text style={styles.titleTipoTransacao}>{`Doação feita por ${item.tipoDoacao == 2 ? "cartão de crédito" : "pix"} `}</Text>
        <Text style={styles.letra}>{"Doação para " + item.nomeDaCampanha}</Text>
        <Text style={styles.descri}>{"Valor da Doação: R$ " + item.valor + " real/reais"}</Text>
      </View>
    </View>
  )

  return (
    <Container>
      <Appbar.Header>
        <Appbar.Content title={'Olá ' + nomeFantasia} />
        <Appbar.Action icon="exit-run" onPress={hand} />
      </Appbar.Header>
      <Body>
        <FlatList
          data={Camp}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
  titleTipoTransacao: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold"
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
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#DFE9F5',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 3
  },
  containerA: {
    width: "80%",
  },
  letra: {
    fontSize: 19,
  },
  sub: {
    fontSize: 11,
  },
});

export default GerenciamentoDoacao;












