import React, { useEffect, useState } from 'react';
import Header from '../Componentes/Header';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import { List, Text, FAB } from 'react-native-paper';
import { FlatList, View, StyleSheet } from 'react-native';

import { getGastos } from '../Services/GastosServicesDb';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { useUser } from '../contexts/UseContext';



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Gastos = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { nomeDaOng } = useUser();

  const [gastos, setGastos] = useState([]);

  // useEffect(() => {

  //   getGasto().then((dados) => {
  //     console.log(dados);
  //     setGastos(dados);

  //   });

  //   console.log('iniciando a tela!');
  // }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item
      title={
        'R$' + parseFloat(item.valor).toFixed(2) + ' (R$' + parseFloat(item.preco).toFixed(2) + ')'
      }
      description={item.odometro + ' Km'}
      left={(props) => (
        <List.Icon
          {...props}
          color={item.tipo == 0 ? 'red' : 'green'}
          icon="gas-station"
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {item.data}
        </Text>
      )}
      onPress={() => {
        navigation.navigate('Abastecimento', { item });
      }}
    />
  );

  return (
    <Container>
      <Header title={'Olá ' + nomeDaOng} />
      <Body>
        <FlatList
          data={gastos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('Abastecimento')}
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
  },
});

export default Gastos;
