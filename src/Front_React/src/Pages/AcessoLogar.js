import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import Input from '../Componentes/input';
import Logo from '../Componentes/Logo';
import { useNavigation } from '@react-navigation/native';
import { login, Receber } from '../Services/AuthServices';
import { useUser } from '../contexts/UseContext';


const AcessoLogar = () => {
    const { SetCamp, idCodigo } = useUser();
    useEffect(() => {
        SetCamp(idCodigo)

    }, [idCodigo]);

    const navigation = useNavigation();
    const { setSigned, setNomeFantasia, setIdCampanha, setCodigo, setCNPJ, setSenha, setCodigo2 } = useUser();
    const [CNPJ, setcnpj2] = useState('');
    const [Senha, setPassword] = useState('');
    const [loading, setLoading] = useState(false);



    const handleLogin = async () => {
        setLoading(true)
        let res = await login(CNPJ, Senha);

        if (!res.nomeFantasia) {
            Alert.alert("Usuário e/ou Senha Inválido(s)")
            setLoading(false)
        }

        if (res.cadastroCampanhas.length == 0) {
            setNomeFantasia(res.nomeFantasia);
            setIdCampanha(res.cadastroCampanhas)
            setCodigo(res.codigo)
            setCNPJ(res.cnpj)
            setSenha(res.senha)
            setCodigo2(res.cadastroCampanhas)
            setSigned(true);
        } else {
            let res2 = await Receber(res.cadastroCampanhas[0].idCampanha)
            if (res2 == '') {
                for (let index = 0; index < res.cadastroCampanhas.length; index++) {
                    const element = res.cadastroCampanhas[index];
                    let res3 = await Receber(element.idCampanha)
                    if (res3!== '')
                    console.log(res2)
                    setNomeFantasia(res.nomeFantasia);
                    setIdCampanha(res.cadastroCampanhas)
                    setCodigo(res.codigo)
                    setCNPJ(res.cnpj)
                    setSenha(res.senha)
                    setCodigo2(res3)
                    setSigned(true);
                }


            } else {
                console.log(res2)
                setNomeFantasia(res.nomeFantasia);
                setIdCampanha(res.cadastroCampanhas)
                setCodigo(res.codigo)
                setCNPJ(res.cnpj)
                setSenha(res.senha)
                setCodigo2(res2)
                setSigned(true);

            }




        }
        setLoading(false)
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
                    loading={loading}
                    onPress={handleLogin}>
                    {
                        loading !== true && (
                            <Text style={styles.buttonTextStyle}>
                                Entrar
                            </Text>
                        )}
                </Button>
                <Button
                    style={styles.button}
                    mode="contained"
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
        margin: 8,

    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 13,
        margin: 8,
    },
    button: {
        marginBottom: 7,
        marginTop: 8,
        margin: 8,
        backgroundColor: '#6a5acd',
        //flex: 0.20,
        justifyContent: "center",
        //alignItems: 'center',
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
        marginTop: 2,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    container: {
        flex: 0.84,
        margin: 8,
    },
});
export default AcessoLogar;