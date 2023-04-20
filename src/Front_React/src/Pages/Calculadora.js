import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import Container from '../Componentes/Container';
import { List, Text, FAB } from 'react-native-paper';
import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import Input from '../Componentes/input'
import { useNavigation } from '@react-navigation/native';
import { getGasto } from '../Services/Gastos.services';
import { useUser } from '../contexts/UseContext';
import { useIsFocused } from '@react-navigation/native';


const Calculadora = () => {
  const {gastos,idCampanha,nomeDaOng, setIdCampanha,setGastos} = useUser();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  //const [gastos, setGastos] =useState([]);

  useEffect(()=>{
  
   setGastos(idCampanha)
  

  }, []);

 
  const renderItem = ({ item }) => (
    
    <List.Item
      title={item.nomeDaCampanha}
      description={item.descricaoDaCampanha}
      left={props => <List.Icon {...props} color={'green'} icon="copyright" />}
      //right={props => <Text {...props} style={{ alignSelf: 'center' }}>{item.estado}</Text>}
      
      onPress={() => navigation.navigate('CadastroCampanha',{item})}
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
          onPress={() => navigation.navigate('CadastroCampanha')}
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
});


export default Calculadora;
