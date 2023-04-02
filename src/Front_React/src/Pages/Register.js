import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import Input from '../Componentes/input';
import Logo from '../Componentes/Logo';
import { useNavigation } from '@react-navigation/native';
import { register } from '../Services/AuthServices';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';


const Register = () => {

    const navigation = useNavigation();
    const [name, setName] = useState('João Paulo Faria');
    const [email, setEmail] = useState('jp_faria@id.uff.br');
    const [password, setPassword] = useState('pucminas');

    const handleRegister = () => {
        register({
            name: name,
            email: email,
            password: password

        }).then(res => {
            console.log(res);

            if (res) {

                Alert.alert('Atenção', 'Usuário Cadastrado com Sucesso', [
                    {
                        text: "Ok", onPress: () => navigation.goBack()
                    }
                ]);
            } else {
                Alert.alert('Atenção', 'Usuário não cadastrado');
            }
        });
    }
    return (
        <Container>
            <View style={styles.header}>
                <Logo />
            </View>

            <Headline style={styles.textHeader}>Cadastrar Nova Conta</Headline>
            <Body>
                <Input
                    label="Nome"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    left={<TextInput.Icon icon="account" />}
                />

                <Input
                    label="Senha"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    left={<TextInput.Icon icon="key" />}
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


export default Register;