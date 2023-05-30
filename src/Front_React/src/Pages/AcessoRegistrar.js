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
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";


const AcessoRegistrar = () => {

    const navigation = useNavigation();
    const [RazaoSocial, setRazao] = useState(' Ong Filhos da Luz1');
    const [NomeFantasia, setFantasia] = useState('Filhos da Luz1');
    const [CNPJ, setCNPJ] = useState('33333333');
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
            <Text style={styles.Login}>
                Cadastrar Nova Ong
            </Text>


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

                    </View>

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
                        <Text style={styles.buttonTextStyle}>
                            Cadastrar
                        </Text>

                    </Button>
                    <Button
                        style={styles.button2}
                        mode="contained"
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonTextStyle}>
                            Cancelar
                        </Text>

                    </Button>


                </ScrollView>
            </Body>
        </Container>

    );

};

const styles = StyleSheet.create({
    textHeader: {
        textAlign: 'center'
    },
    header: {
        alignItems: "center",
        marginLeft: 16,
        marginRight: 16,

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
        margin: 8
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
    Login: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#6a5acd',
        flex: 0.2,
        justifyContent: "center",
        height: "100%",
        //alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 2,
        margin: 8,
    },
    button2: {
        marginBottom: 40,
        marginTop: 10,
        backgroundColor: 'red',
        flex: 0.2,
        justifyContent: "center",
        height: "100%",
        // alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 2,
        margin: 8,
    },
});


export default AcessoRegistrar;