import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import Container from '../Componentes/Container';
import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import Input from '../Componentes/input'
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UseContext';
import { Doar } from '../Services/AuthServices';
import {
  RadioButton,
  Text,
  TextInput,
  Button,
} from 'react-native-paper';


const CampanhasCadastradas = ({ route }) => {
  const { nomeFantasia,loading2,setloading2 } = useUser();
  const navigation = useNavigation();
  const [nomeDaOng2, setNomeDaOng] = useState(nomeFantasia);
  const [nomeDaCampanha, setNomeDaCampanha] = useState('');
  const [DescricaoDaCamp, setDescricaoDacamp] = useState('');
  const [Telefone, SetTelefone] = useState('');
  const [Email, setEmail] = useState('');
  const [Endereco, setEndereco] = useState('');
  const [Pais, setPais] = useState('');
  const [Cidade, setCidade] = useState('');
  const [pix, setpix] = useState('');
  const [cc, setcc] = useState('');
  const [fisico, setfisico] = useState('');
  const [cadastroCod, setCadastroCod] = useState('');
  const [cursos, setcursos] = useState(['Selecione um estado', 'RJ', 'SP', 'PI', 'MG', 'RS', 'MA'])
  const [cursoSelecionado, setCursoSelecionado] = useState([]);
  const { item } = route.params ? route.params : {};
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState(0);
  const [radiopix, setradiopix] = useState(true)
  let meio;
  let tipoDoacao;

  const retornoOi = async () => {

    if (tipo == '') {
      return Alert.alert('Favor informar a Forma de Doação')
    }

    if (valor == 0) {

      return Alert.alert('Favor informar o valor da Doação')

    }

    if (tipo == 'cc') {
      meio = 'Cartão de Crédito'
      tipoDoacao = 2

    } else {
      meio = "PIX"
      tipoDoacao = 1
    }

    Alert.alert(
      'Doação',
      'Deseja Confirmar a Doação de ' + valor + ' ??',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            Alert.alert('Doação Cancelada Com sucesso')
            setTipo('')
            setValor(0)


          }
        },
        {
          text: 'OK',
          onPress: async () => {

            Alert.alert('Doação de ' + valor + ' real(s) em ' + meio + ' finalizada com sucesso')
            setTipo('')
            setValor(0)

            let res = await Doar(tipoDoacao, valor, item.idCampanha, item.idCampanha);

          },
        }
      ],
      { cancelable: false },

    );

  }


  useEffect(() => {
    if (item) {
      setNomeDaOng(item.nomeDaOng);
      setNomeDaCampanha(item.nomeDaCampanha);
      setDescricaoDacamp(item.descricaoDaCampanha);
      SetTelefone(item.telefone);
      setEmail(item.email);
      setEndereco(item.endereco);
      setCidade(item.cidade);
      setCursoSelecionado(item.estado);
      setPais(item.pais);


      if (item.pix === true) {
        setpix('Sim');
      } else {
        setpix('Não');
      }
      if (item.cartaoDeCredito === true) {
        setcc('Sim');
      } else {
        setcc('Não');
      }
      if (item.receberFisico === true) {
        setfisico('Sim');
      } else {
        setfisico('Não');
      }
      setCadastroCod(item.idCampanha)

    }
    if (pix === 'sim') {

    }
    setloading2(false)
  }, [item]);
  return (
    <Container>
      <Header title={'Detalhes da Campanha'} goBack={() => navigation.goBack()}>
      </Header>
      <Body>
        <ScrollView contentContainerStyle={styles.text}>
          <Input
            label="Nome da Ong - (Campo não editável)"
            value={nomeDaOng2}
            disabled={true}
            onChangeText={(text) => setNomeDaOng(text)}
            left={<TextInput.Icon icon="chevron-right" />}

          />
          <Input
            label="Nome da Campanha"
            value={nomeDaCampanha}
            disabled={true}
            onChangeText={(text) => setNomeDaCampanha(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Descrição da Campanha"
            value={DescricaoDaCamp}
            disabled={true}
            onChangeText={(text) => setDescricaoDacamp(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Telefone"
            value={Telefone.toString()}
            disabled={true}
            maxLength={8}
            keyboardType="numeric"
            onChangeText={(text) => SetTelefone(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />

          <Input
            label="Email"
            value={Email}
            disabled={true}
            onChangeText={(text) => setEmail(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Endereço"
            value={Endereco}
            disabled={true}
            onChangeText={(text) => setEndereco(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Cidade"
            value={Cidade}
            disabled={true}
            onChangeText={(text) => setCidade(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />

          <Input
            label="Estado"
            value={cursoSelecionado}
            disabled={true}
            onChangeText={(text) => setCidade(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />

          <Input
            label="Pais"
            value={Pais}
            disabled={true}
            onChangeText={(text) => setPais(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Aceita PIX? - (Digite Sim ou Não)"
            value={pix}
            disabled={true}
            onChangeText={(text) => setpix(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Aceita Cartão de Crédito? - (Digite Sim ou Não)"
            value={cc}
            disabled={true}
            onChangeText={(text) => setcc(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Aceita Doação física? - (Digite Sim ou Não)"
            value={fisico}
            disabled={true}
            onChangeText={(text) => setfisico(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Text>
            {'\n'}
          </Text>
          <Input style={styles.inputValor}
            label={pix === 'Não' && cc === 'Não' && fisico === 'Não' ? "Campanha Encerrada" : pix === 'Não' && cc === 'Não' && fisico === 'Sim' ? "Aceita Apenas Doação Física" : "Digite sua Doação"}
            disabled={pix === 'Não' && cc == 'Não' ? true : false}
            keyboardType="numeric"
            value={valor}
            maxLength={5}
            onChangeText={text => setValor(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />


          <View style={styles.containerRadio}>
            <View style={pix === 'Não' ? styles.containerRadioItempixn : styles.containerRadioItempixs}>
              <RadioButton
                value="first"
                status={tipo === 'pix' ? 'checked' : 'unchecked'}
                color={'red'}
                onPress={() => setTipo('pix')}


              />
              <Text>PIX</Text>
            </View>
            <View style={cc === 'Não' ? styles.containerRadioItemccn : styles.containerRadioItemccs}>
              <RadioButton
                value="first"
                status={tipo === 'cc' ? 'checked' : 'unchecked'}
                color={'green'}
                onPress={() => setTipo('cc')}
              />
              <Text>Cartão de Crédito</Text>
            </View>
          </View>

          <Button mode="contained"
            color={'green'}
            style={pix === 'Não' && cc === 'Não' ? styles.button3 : styles.button2}
            onPress={retornoOi}

          >
            DOAR
          </Button>
        </ScrollView>
      </Body>
    </Container >
  );
};



const styles = StyleSheet.create({
  button: {
    marginBottom: 8
  },
  textHeader: {
    textAlign: 'center'
  },
  header: {
    alignItems: "center",
    marginTop: 70,
    marginBottom: 12,
  },
  TextInputMask: {
    backgroundColor: '#90ee90',
    marginBottom: 8,
    flex: 1,
    height: 62,
  },
  input: {
    backgroundColor: '#90ee90',
    marginBottom: 8,
    flex: 1,
    height: 62,
    margin:8,
  },
  inputValor: {
    backgroundColor: '#C0C0C0',
    fontWeight: 'bold',
    margin:8,

  },
  inputValor2: {
    backgroundColor: '#C0C0C0',
    disabled: '{true}',
    margin:8,
    
  },
  text: {
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    marginBottom: 23,

  },
  button2: {
    marginBottom: 23,
    margin:8,

  },
  button3: {
    marginBottom: 23,
    display: 'none',
    margin:8,

  },
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
  containerRadioItempixs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRadioItempixn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    display: 'none'
  },
  containerRadioItemccs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRadioItemccn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    display: 'none'
  },
});


export default CampanhasCadastradas;
