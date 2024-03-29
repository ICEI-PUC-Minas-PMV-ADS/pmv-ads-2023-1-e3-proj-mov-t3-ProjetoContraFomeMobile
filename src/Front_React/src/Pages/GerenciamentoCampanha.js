import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, Button, Checkbox, Text } from 'react-native-paper';
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
  const [showError, setShowError] = useState(false)
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
  const [pix, setpix] = useState(false);
  const [cc, setcc] = useState(false);
  const [fisico, setfisico] = useState(false);
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


      if (Pais=='Não Possui chave PIX') {
        setpix(false);
      } else {
        setpix(true);
      }
      if (item.cartaoDeCredito === false) {
        setcc(false);
      } else {
        setcc(true);
      }
      if (item.receberFisico === false){
        setfisico(false);
      } else {
        setfisico(true);
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

    if (Telefone == "" || nomeDaCampanha == "" || DescricaoDaCamp == "" || Email == "" || Cidade == "" || Endereco == "") {
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
        pais: Pais==""?'Não Possui chave PIX':Pais,
        pix: pix == false || Pais=='Não Possui chave PIX' ? false : true,
        cartaoDeCredito: cc == false ? false : true,
        receberFisico: fisico == false ? false : true,
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
        pais: Pais==""?'Não Possui chave PIX':Pais,
        pix: pix == false || Pais=='Não Possui chave PIX' ? false : true,
        cartaoDeCredito: cc == false ? false : true,
        receberFisico: fisico == false ? false : true,
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
      <Header title={nomeDaCampanha == "" ? 'Cadastrar Nova Campanha' : 'Editar Campanha'} goBack={() => navigation.goBack()}>
        {/* <Appbar.Action icon="check" onPress={handleSalvar} />
        {
          item &&
          <Appbar.Action icon="trash-can" onPress={handleExcluir} />


        } */}

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
            label="Informe a Chave PIX"
            value={Pais}
            onChangeText={(text) => setPais(text)}
            left={<TextInput.Icon icon="chevron-right" />}


          />
           <Text style={styles.inputValor3}>
                * O campo "Aceita Doação física" significa que a campanha aceita doação no endereço informado no formulário acima.
            </Text>
            <Text style={styles.inputValor3}>
                ** Se a campanha não aceitar doação em PIX, favor, deixar o campo "Informe a Chave PIX" em branco, que automaticamente o campo "Aceita PIX" não será marcado com flag
            </Text>
            <Text style={styles.inputValor3}>
                *** Se a campanha aceitar doação em PIX, favor, preencher o campo "Informe a Chave PIX", que automaticamente o campo "Aceita PIX" será marcado com flag
            </Text>

          <View style={styles.containerTerms}>
            <Checkbox
              status={Pais=='' || Pais=="Não Possui chave PIX" ? 'unchecked' : 'checked'}
              onPress={() => {
                setpix(!pix)
              }}
            />
            <Text>
              Aceita PIX?
            </Text>
          </View>
          <View style={styles.containerTerms}>
            <Checkbox
              status={cc ? 'checked' : 'unchecked'}
              onPress={() => {
                setcc(!cc)
              }}
            />
            <Text>
              Aceita Cartão de Crédito?
            </Text>
          </View>
          <View style={styles.containerTerms}>
            <Checkbox
              status={fisico ? 'checked' : 'unchecked'}
              onPress={() => {
                setfisico(!fisico)
              }}
            />
            <Text>
              Aceita Doação Física?
            </Text>
          </View>

{/* 
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
          /> */}
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
              EXCLUIR CAMPANHA
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
    margin:8
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
    margin:8,

  },
  button2: {
    marginBottom: 23,
    margin:8,

  },
  containerTerms: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  inputValor3: {
    backgroundColor: 'orange',
    fontWeight: 'bold',
    margin: 8,

  },
  textError: {
    marginBottom: 10,
    color: "red"
}
});


export default GerenciamentoCampanha;
