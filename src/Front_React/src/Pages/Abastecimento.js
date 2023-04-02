import React, { useState, useEffect } from 'react';
import Header from '../Componentes/Header';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import { useIsFocused } from '@react-navigation/native';
import {
  RadioButton,
  Text,
  TextInput,
  Button,
  Appbar,
} from 'react-native-paper';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../Componentes/input';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { postGasto, updateGasto, deleteGasto } from '../Services/Gastos.services';
import { insertGastos, updateGastos, deleteGastos } from '../Services/GastosServicesDb';
const Abastecimento = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [tipo, setTipo] = useState('gas');
  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [preco, setPreco] = useState('');
  const [valor, setValor] = useState('');
  const [odometro, setOdometro] = useState('');


  // useEffect(() => {
  //   if (item) {
  //     console.log(item)
  //     setTipo(item.tipo == 0 ? 'gas' : 'eta')
  //     setData(item.data);
  //     setPreco(item.preco.toString());
  //     setValor(item.valor.toString());
  //     setOdometro(item.odometro.toString());
  //   }

  // }, []);


  // const handleSalvar = () => {
  //   if (item) {
  //     updateGasto({
  //       tipo: tipo == 'gas' ? 0 : 1,
  //       data: data,
  //       preco: preco,
  //       valor: valor,
  //       odometro: odometro,
  //       id: item.id
  //     }).then(res => {
  //       navigation.goBack();
  //     });
  //   } else {
  //     postGasto({
  //       tipo: tipo == 'gas' ? 0 : 1,
  //       data: data,
  //       preco: preco,
  //       valor: valor,
  //       odometro: odometro
  //     }).then(res => {
  //       navigation.goBack()
  //     });
  //   }
  //   //navigation.goBack();
  // };
  // const handleExcluir = () => {
  //   console.log(item.id)
  //   deleteGasto(item.id).then(res => {
  //     navigation.goBack();
  //   });

  // };
  return (
    <Container>
      <Header title={'Abastecime'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {
          item &&
          <Appbar.Action icon="trash-can" onPress={handleExcluir} />
        }

      </Header>
      <Body>
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'gas' ? 'checked' : 'unchecked'}
              color={'red'}
              onPress={() => setTipo('gas')}
            />
            <Text>Gasolina</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'eta' ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => setTipo('eta')}
            />
            <Text>Etanol</Text>
          </View>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onTouchCancel={() => {
              setShow(false);
            }}
            onChange={(event, date) => {
              setShow(false);
              setData(moment(date).format('DD/MM/YYYY'));
            }}
          //onChange={onChange}
          />
        )}
        <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data"
            value={data}
            left={<TextInput.Icon icon="calendar-month" />}
            editable={false}
          />
        </TouchableOpacity>
        <Input
          label="Preço"
          value={preco}
          onChangeText={(text) => setPreco(text)}
          left={<TextInput.Icon icon="currency-brl" />}
        />
        <Input
          label="Valor"
          value={valor}
          onChangeText={(text) => setValor(text)}
          left={<TextInput.Icon icon="currency-brl" />}
        />
        <Input
          label="Odometro"
          value={odometro}
          onChangeText={(text) => setOdometro(text)}
          left={<TextInput.Icon icon="camera-timer" />}
        />
        <Button mode="contained" style={styles.button} onPress={handleSalvar}>
          Salvar
        </Button>
        {
          item &&
          <Button
            mode="contained"
            color={'red'}
            style={styles.button}
            onPress={handleExcluir}>
            Excluir
          </Button>
        }
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerRadio: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRadioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    marginBottom: 8,
  },
});

export default Abastecimento;
