import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import Input from '../Componentes/input';
import Logo from '../Componentes/Logo';
import { useNavigation } from '@react-navigation/native';
import { login, Receber } from '../Services/AuthServices';
import { useUser } from '../contexts/UseContext';
import AcessoRegistrar from './AcessoRegistrar';

const AcessoLogar = () => {

    const navigation = useNavigation();
    const { setSigned, setNomeFantasia, setIdCampanha, setCodigo, setCNPJ, setSenha, setCodigo2 } = useUser();
    const [CNPJ, setcnpj2] = useState('50048784');
    const [Senha, setPassword] = useState('111111');
    const handleLogin = async () => {
        let res = await login(CNPJ, Senha);

        if (!res.nomeFantasia) {
            return Alert.alert("Usuário e/ou Senha Inválido(s)")
        }

        if (res.cadastroCampanhas.length === 0) {
            setNomeFantasia(res.nomeFantasia);
            setIdCampanha(res.cadastroCampanhas)
            setCodigo(res.codigo)
            setCNPJ(res.cnpj)
            setSenha(res.senha)
            setCodigo2(res.cadastroCampanhas)
            setSigned(true);


        } else {
            let res2 = await Receber(res.cadastroCampanhas[0].idCampanha)
            setNomeFantasia(res.nomeFantasia);
            setIdCampanha(res.cadastroCampanhas)
            setCodigo(res.codigo)
            setCNPJ(res.cnpj)
            setSenha(res.senha)
            setCodigo2(res2)
            setSigned(true);

        }
    };
    return (
        <Container>
            <View style={styles.header}>
                <Logo />
            </View>

            <Text style={styles.Login}>
                Fazer Login
            </Text>
            <Body>
                <Input
                    label="CNPJ"
                    value={CNPJ}
                    keyboardType='decimal-pad'
                    maxLength={8}
                    onChangeText={(number) => setcnpj2(number)}

                    left={<TextInput.Icon icon="account" />}
                />

                <Input
                    label="Senha"
                    value={Senha}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}

                    left={<TextInput.Icon icon="key" />}
                />

                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={handleLogin}>
                    <Text style={styles.buttonTextStyle}>
                        Entrar
                    </Text>

                </Button>
                <Button
                    style={styles.button}
                    mode="outlined"
                    onPress={() => navigation.navigate('AcessoRegistrar')}>
                    <Text style={styles.buttonTextStyle}>
                       Cadastrar Nova Ong
                    </Text>

                </Button>

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
        marginTop: 10,

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
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    Login: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 'bold',
        marginBottom: 12,


    },
});


export default AcessoLogar;