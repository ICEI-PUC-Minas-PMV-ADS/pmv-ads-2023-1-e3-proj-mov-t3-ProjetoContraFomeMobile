import React, { useEffect, useState } from 'react';
import Header from '../Componentes/Header';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import { List, Text, FAB, Button } from 'react-native-paper';
import { FlatList, View, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { useUser } from '../contexts/UseContext';
import Home from './Home';



const Gastos = () => {
  const { setSigned, nomeFantasia, codigo, cnpj, nomeDaOng, Camp, setGastos, idCampanha, SetCamp, idCodigo, setCodigo } = useUser();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const hand = async () => {
    setSigned(false);
    //SetCamp([])

  };

  useEffect(() => {
    SetCamp(idCodigo)

  }, [idCodigo]);


  const renderItem = ({ item }) => (

    <List.Item title={"Doação para "+ item.nomeDaCampanha}
      description={props =><Text{...props} style={styles.descri}>{"Valor da Doação: R$ " + item.valor + " real/reais"}</Text>}
      left={props =><List.Icon {...props} color={item.tipoDoacao == '2' ? 'green' : 'red'} icon="asterisk" />}
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
        {/* <FAB
          icon="plus"
          style={styles.fab}
        //onPress={() => navigation.navigate('CadastroCampanha')}
        /> */}

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
    fontStyle:'bolder'

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

export default Gastos;












