import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import Container from '../Componentes/Container';
import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import Input from '../Componentes/input'
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import { useUser } from '../contexts/UseContext';
import { postGasto, updateGasto, deleteGasto } from '../Services/Gastos.services';
import { Receber, login } from '../Services/AuthServices';


const GerenciamentoCampanha = ({ route }) => {
  const { codigo, setCodigo, senha, cnpj, setSigned, setCNPJ, setSenha, setNomeFantasia, setGastos, setIdCampanha, setCodigo2, nomeFantasia } = useUser();
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
  const [cursos] = useState(['Selecione um estado', 'RJ', 'SP', 'PI', 'MG', 'RS', 'MA'])
  const [cursoSelecionado, setCursoSelecionado] = useState([]);
  const { item } = route.params ? route.params : {};


  const handleLogin = async () => {

    let res = await login(cnpj, senha);
    console.log(res.cadastroCampanhas)
    setGastos(res.cadastroCampanhas);


  }

  const handAtualizar = async () => {

    let res = await login(cnpj, senha);


    if (res.cadastroCampanhas.length === 0) {
      setNomeFantasia(res.nomeFantasia);
      setIdCampanha(res.cadastroCampanhas)
      setCodigo(res.codigo)
      setCNPJ(res.cnpj)
      setSenha(res.senha)
      setCodigo2(res.cadastroCampanhas)
      setGastos(res.cadastroCampanhas);
      setSigned(true);


    } else {
      let res2 = await Receber(res.cadastroCampanhas[0].idCampanha)
      setNomeFantasia(res.nomeFantasia);
      setIdCampanha(res.cadastroCampanhas)
      setCodigo(res.codigo)
      setCNPJ(res.cnpj)
      setSenha(res.senha)
      setCodigo2(res2)
      setGastos(res.cadastroCampanhas);
      setSigned(true);

    }




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
      setCadastroCod(item.cadastroCod)



    } else {
      setNomeDaOng(nomeDaOng2);
    }



  }, [item]);
  const handleSalvar = () => {

    if ((Telefone.toString()).length != 8) {
      Alert.alert('Número do Telefone incorreto. Digite apenas o número do telefone - (são 8 dígitos)')
      return
    }

    if (Telefone == "" || nomeDaCampanha == "" || DescricaoDaCamp == "" || Email == "" || Pais == "" || Cidade == "" || Endereco == "") {
      Alert.alert('Existe campo(s) vazio(s), favor, verificar!!')
      return
    }
    if (cursoSelecionado == 'Selecione um estado' || cursoSelecionado == '') {
      Alert.alert('Favor, selecionar um estado')
      return
    }

    if (item) {
      updateGasto({
        idCampanha: item.idCampanha,
        nomeDaOng: nomeDaOng2,
        nomeDaCampanha: nomeDaCampanha,
        descricaoDaCampanha: DescricaoDaCamp,
        telefone: Telefone,
        email: Email,
        endereco: Endereco,
        cidade: Cidade,
        estado: cursoSelecionado,
        pais: Pais,
        pix: pix == 'Sim' ? true : false,
        cartaoDeCredito: cc == 'Sim' ? true : false,
        receberFisico: fisico == 'Sim' ? true : false,
        cadastroCodigo: item.cadastroCodigo

      }).then(res => {
        handleLogin()
        navigation.goBack();
      });





    } else {

      postGasto({
        nomeDaOng: nomeDaOng2,
        nomeDaCampanha: nomeDaCampanha,
        descricaoDaCampanha: DescricaoDaCamp,
        telefone: Telefone,
        email: Email,
        endereco: Endereco,
        cidade: Cidade,
        estado: cursoSelecionado,
        pais: Pais,
        pix: pix == 'Sim' ? true : false,
        cartaoDeCredito: cc == 'Sim' ? true : false,
        receberFisico: fisico == 'Sim' ? true : false,
        cadastroCodigo: codigo,

      }).then(res => {
        handleLogin()
        navigation.goBack();
      });

    }
  }
  const handleExcluir = () => {
    deleteGasto(item.idCampanha).then(res => {
      handleLogin();
      handAtualizar();
      navigation.goBack();
    })
  }


  return (

    <Container>
      <Header title={'Cadastrar/Editar Campanha'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {
          item &&
          <Appbar.Action icon="trash-can" onPress={handleExcluir} />


        }

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
            onChangeText={(text) => setNomeDaCampanha(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Descrição da Campanha"
            value={DescricaoDaCamp}
            onChangeText={(text) => setDescricaoDacamp(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Telefone"
            //value={Telefone}
            value={Telefone.toString()}
            maxLength={8}
            keyboardType="numeric"
            onChangeText={(text) => SetTelefone(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />

          <Input
            label="Email"
            value={Email}
            onChangeText={(text) => setEmail(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Endereço"
            value={Endereco}
            onChangeText={(text) => setEndereco(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Cidade"
            value={Cidade}
            onChangeText={(text) => setCidade(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <View>
            <Picker
              style={styles.input}
              selectedValue={cursoSelecionado}
              onValueChange={(itemValue) =>
                setCursoSelecionado(itemValue)


              }>
              {
                cursos.map(cr => {
                  return <Picker.Item label={cr} value={cr} />
                })
              }
            </Picker>
          </View>

          <Input
            label="Pais"
            value={Pais}
            onChangeText={(text) => setPais(text)}
            left={<TextInput.Icon icon="chevron-right" />}


          />
          <Input
            label="Aceita PIX? - (Digite Sim ou Não)"
            value={pix}
            onChangeText={(text) => setpix(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Aceita Cartão de Crédito? - (Digite Sim ou Não)"
            value={cc}
            onChangeText={(text) => setcc(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Input
            label="Aceita Doação física? - (Digite Sim ou Não)"
            value={fisico}
            onChangeText={(text) => setfisico(text)}
            left={<TextInput.Icon icon="chevron-right" />}
          />
          <Button mode="contained"
            style={styles.button1}
            onPress={handleSalvar}>

            SALVAR
          </Button>

          {item && (

            <Button mode="contained"
              color={'red'}
              style={styles.button2}
              onPress={handleExcluir}>
              EXCLUIR
            </Button>
          )}


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
    marginBottom: 12
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

  },
});


export default GerenciamentoCampanha;
