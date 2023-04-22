import React, { useEffect, useState } from 'react';
import Header from '../Componentes/Header';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import { List, Text, FAB, Button } from 'react-native-paper';
import { FlatList, View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { useUser } from '../contexts/UseContext';
import Home from './Home';



const Gastos = () => {
  const { setSigned, nomeFantasia,codigo,cnpj,nomeDaOng} = useUser();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  //const [gastos, setGastos] = useState([]);

  const hand = async () => {
    setSigned(false);
   

  };


  // useEffect(() => {

  //   getGasto().then((dados) => {
  //     console.log(dados);
  //     setGastos(dados);

  //   });

  //   console.log('iniciando a tela!');
  // }, [isFocused]);

  // const renderItem = ({ item }) => (
  //   <List.Item
  //     title={
  //       'R$' + parseFloat(item.valor).toFixed(2) + ' (R$' + parseFloat(item.preco).toFixed(2) + ')'
  //     }
  //     description={item.odometro + ' Km'}
  //     left={(props) => (
  //       <List.Icon
  //         {...props}
  //         color={item.tipo == 0 ? 'red' : 'green'}
  //         icon="gas-station"
  //       />
  //     )}
  //     right={(props) => (
  //       <Text {...props} style={{ alignSelf: 'center' }}>
  //         {item.data}
  //       </Text>
  //     )}
  //     onPress={() => {
  //       navigation.navigate('Abastecimento', { item });
  //     }}
  //   />
  // );
  console.log(cnpj)
  return (
    <Container>
      <Header title={'Olá ' + nomeFantasia} />
      
      <Body>

        {/* <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('Senha')}
        /> */}

        <Button
          style={styles.button}
          mode="outlined"
          onPress={hand}>

          <Text>
            voltar!!
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
  },
  button: {
    marginBottom: 8
  },
  textHeader: {
    textAlign: 'center'
  },
  header: {
    alignItems: "center",
    marginTop: 70,
    marginBottom: 12
  }
});

export default Gastos;
