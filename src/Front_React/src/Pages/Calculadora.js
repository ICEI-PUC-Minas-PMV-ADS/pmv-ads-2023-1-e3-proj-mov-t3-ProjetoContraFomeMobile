import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import Container from '../Componentes/Container';
import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import Input from '../Componentes/input'

const Calculadora = () => {
  const [gas, Setgas] = useState('');
  const [eta, Seteta] = useState('');


  return (
    <Container>
      <Header title={'Calculadorea Flex'} />
      <Body>
        <Input
          label="Preço da Gasolina"
          value={gas}
          onChangeText={(text) => Setgas(text)}
        />
        <Input
          label="Preço do Etanol"
          value={eta}
          onChangeText={(text) => Seteta(text)}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Calcular
        </Button>
        <
// @ts-ignore
        Text style={styles.text}>{gas}</Text>
      </Body>
    </Container>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 10,
  },
});

export default Calculadora;
