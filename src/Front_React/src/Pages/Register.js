import React, { useState, useRef } from 'react';
import { StyleSheet, View, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import Input from '../Componentes/input';
import Logo from '../Componentes/Logo';
import { useNavigation } from '@react-navigation/native';
import { register, verifica } from '../Services/AuthServices';
import { Text } from 'react-native-paper';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";
import Senha from './Senha';
import { useUser } from '../contexts/UseContext';

const Register = () => {

    const navigation = useNavigation();
    const [RazaoSocial, setRazao] = useState(' Ong Filhos da Luz1');
    const [NomeFantasia, setFantasia] = useState('Filhos da Luz1');
    const [CNPJ, setCNPJ] = useState('33333333');
    //const [Data, setData] = useState('10/05/2022');
    const [Endereco, setEndereco] = useState('Rua 27 de Novembro');
    const [Cidade, setCidade] = useState('Valenca');
    const [Estado, setEstado] = useState('RJ');
    const [CEP, setCEP] = useState('27600000');
    const [Pais, setPais] = useState('Brasil');
    const [Telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('jp_faria@id.uff.br');
    const [password, setPassword] = useState('111111');
    const [passwordconfirm, setPasswordconfirm] = useState('111111');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));
    const [cursos, setcursos] = useState(['Selecione um estado', 'RJ', 'SP', 'PI', 'MG', 'RS'])
    const [cursoSelecionado, setCursoSelecionado] = useState([])

    // function showCpf() {


    //     alert('verde')
    //     alert("deu certo")

    // }

    const handleRegister = async () => {
        if (Telefone.length != 8) {
            Alert.alert('Número do Telefone incorreto. Digite apenas o número do telefone - (são 8 dígitos)')
            return
        }

        if (CNPJ.length != 8) {
            Alert.alert('Número do CNPJ incorreto. Digite apenas a raiz do CNPJ - (são 8 dígitos)')
            return
        }
        if (CEP.length != 8) {
            Alert.alert('Número do CEP incorreto. Digite apenas o número do CEP - (são 8 dígitos)')
            return
        }
        if (CEP == "" || CNPJ == "" || RazaoSocial == "" || NomeFantasia == "" || Telefone == "" || data == "" || Endereco == "" || Cidade == "" || Pais == "" || email == "" || password == "" || passwordconfirm == "") {
            Alert.alert('Existe campo(s) vazio(s), favor, verificar!!')
            return
        }
        if (password != passwordconfirm) {
            Alert.alert('A Senha e a Confirmação da Senha estão diferentes, favor, verificar!!')
            return
        }
        if (password.length != 6) {
            Alert.alert('A senha precisa ser com 6 dígitos - (são 6 dígitos)')
            return
        }
        if (cursoSelecionado == 'Selecione um estado' || cursoSelecionado == '') {
            Alert.alert('Favor, selecionar um estado')
            return
        }


        let resVerificar = await verifica(CNPJ, password);
        console.log("resVerificar");

        if (resVerificar.codigo) {
            Alert.alert('Atenção', 'CNPJ já cadastrado. Favor tentar novamente com outro CNPJ', [
                {
                    text: "Ok", onPress: () => navigation.goBack()
                }

            ]);
            return
        }


        let res = await register(RazaoSocial, NomeFantasia, CNPJ, data, Endereco, Cidade, Estado, CEP, Pais, Telefone, email, password);
        console.log("res");

        if (res) {
            Alert.alert('Atenção', 'Usuário cadastrado com sucesso', [
                {
                    text: "Ok", onPress: () => navigation.goBack()
                }

            ]);
        } else {
            Alert.alert('Atenção', 'Usuário não cadastrado');

        }

    };
    return (
        <Container>
            <View style={styles.header}>
                <Logo />
            </View>

            <Headline style={styles.textHeader}>Cadastrar Nova Conta</Headline>
            <Body>
                <ScrollView contentContainerStyle={styles.text}>
                    <Input
                        label="Razão Social"
                        value={RazaoSocial}
                        onChangeText={(text) => setRazao(text)}
                        left={<TextInput.Icon icon="chevron-right" />}
                    />

                    <Input
                        label="Nome Fantasia"
                        value={NomeFantasia}
                        onChangeText={(text) => setFantasia(text)}
                        left={<TextInput.Icon icon="chevron-right" />}
                    />
                    <Input

                        label="CNPJ- (Digite os 8 números da Raiz)"
                        value={CNPJ}
                        keyboardType='decimal-pad'
                        maxLength={8}
                        onChangeText={(text) => setCNPJ(text)}
                        left={<TextInput.Icon icon="chevron-right" />}

                    />


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
                        {/* <View>
                            <Text>
                                O curso selecionado foi: {cursoSelecionado}
                            </Text>
                        </View> */}

                    </View>

                    {/* <Input
                        label="Estado"
                        value={Estado}

                        maxLength={2}
                        onChangeText={(text) => setEstado(text)}
                        left={<TextInput.Icon icon="chevron-right" />}
                    /> */}




                    <Input
                        label="CEP - (Digite os 8 números da Raiz)"
                        value={CEP}
                        keyboardType='decimal-pad'
                        maxLength={8}
                        onChangeText={(text) => setCEP(text)}
                        left={<TextInput.Icon icon="chevron-right" />}
                    />
                    <Input
                        label="Pais"
                        value={Pais}
                        onChangeText={(text) => setPais(text)}
                        left={<TextInput.Icon icon="chevron-right" />}
                    />

                    <Input
                        label="Telefone - (Digite os 8 números do telefone) "
                        value={Telefone}
                        keyboardType='decimal-pad'
                        maxLength={8}
                        onChangeText={(text) => setTelefone(text)}
                        left={<TextInput.Icon icon="chevron-right" />}
                    />
                    <Input
                        label="E-mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        left={<TextInput.Icon icon="chevron-right" />}
                    />
                    <Input
                        label="Senha"
                        value={password}
                        secureTextEntry
                        maxLength={6}
                        onChangeText={(text) => setPassword(text)}
                        left={<TextInput.Icon icon="chevron-right" />}
                    />
                    <Input
                        label="Confirmar Senha"
                        value={passwordconfirm}
                        secureTextEntry
                        maxLength={6}
                        onChangeText={(text) => setPasswordconfirm(text)}
                        left={<TextInput.Icon icon="chevron-right" />}
                    />


                    <Button
                        style={styles.button}
                        mode="contained"
                        onPress={handleRegister}>
                        CADASTRAR
                    </Button>
                    <Button
                        style={styles.button}
                        mode="outlined"
                        onPress={() => navigation.goBack()}>
                        CANCELAR
                    </Button>

                    <Text>
                        {'\n'}
                    </Text>
                </ScrollView>
            </Body>
        </Container>

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
});


export default Register;