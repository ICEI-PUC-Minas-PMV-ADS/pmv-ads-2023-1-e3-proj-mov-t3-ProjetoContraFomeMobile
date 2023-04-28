import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import Input from '../Componentes/input';
import Logo from '../Componentes/Logo';
import { useNavigation } from '@react-navigation/native';
import { login, Receber } from '../Services/AuthServices';
import { useUser } from '../contexts/UseContext';



const Senha = () => {

    const navigation = useNavigation();
    const { setSigned, setNomeFantasia, setIdCampanha, idCampanha, nome, setnomeDaOng, setCodigo, setCNPJ, setSenha, nomeDaOng, nomeFantasia, Camp, setCamp, valor, setValor, setTipoDoacao, tipoDoacao, idCodigo, setCodigo2 } = useUser();
    const [CNPJ, setcnpj2] = useState('50048784');
    const [Senha, setPassword] = useState('111111');
    //const [teste, setTeste] = useState();
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
        //setCamp(res2.idCampanha)
    };
    return (
        <Container>
            <View style={styles.header}>
                <Logo />
            </View>

            <Headline style={styles.textHeader}>Fazer Login</Headline>
            <Body>
                <Input
                    label="CNPJ"
                    value={CNPJ}
                    keyboardType='decimal-pad'
                    maxLength={8}
                    onChangeText={(number) => setcnpj2(number)}
                    // @ts-ignore
                    left={<TextInput.Icon icon="account" />}
                />

                <Input
                    label="Senha"
                    value={Senha}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    // @ts-ignore
                    left={<TextInput.Icon icon="key" />}
                />

                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={handleLogin}>
                    ENTRAR
                </Button>
                <Button
                    style={styles.button}
                    mode="outlined"
                    onPress={() => navigation.goBack()}>
                    CANCELAR
                </Button>
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
    }
});


export default Senha;