import React, { useEffect } from 'react';
import Header from '../Componentes/Header';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import { List, Text, Button } from 'react-native-paper';
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

    <List.Item title={"Doação para " + item.nomeDaCampanha}
      description={props => <Text{...props} style={styles.descri}>{"Valor da Doação: R$ " + item.valor + " real/reais"}</Text>}
      left={props => <List.Icon {...props} color={item.tipoDoacao == '2' ? 'green' : 'red'} icon="asterisk" />}
      right={props => <Text {...props} style={styles.tipo}>{item.tipoDoacao == '1' ? 'PIX' : 'Cartão de Crédito'}</Text>}

    />

  )

  return (
    <Container>
      <Header title={'Olá ' + nomeFantasia} />
      <Body>

        <SafeAreaView style={styles.container}>
          <FlatList
            data={Camp}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>

        <Button
          style={styles.button}
          mode="outlined"
          onPress={hand}
        >
          <Text>
            ***SAIR***
          </Text>

        </Button>

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
  }
});

export default GerenciamentoDoacao;












