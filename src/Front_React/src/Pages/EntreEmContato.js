import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../Componentes/Container';
import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import Input from '../Componentes/input';
import { TextInput, Button } from 'react-native-paper';
import { useUser } from '../contexts/UseContext';


const Contato = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [TELEFONE, setTelefone] = useState('');
    const [mensagem, setmensagem] = useState('');


    return (
        <Container>
            <Header title={'Entre em Contato Conosco'} />
            <Body>
                <ScrollView contentContainerStyle={styles.text}>
                    <View>
                   
                        <Text style={styles.titulo}>
                            Fale Conosco
                        </Text>
                        <Text style={styles.text}>
                            Está com algum problema ou dúvida?
                            <Text>
                                {'\n'}
                            </Text>
                            Nós podemos te ajudar, basta preencher o formulário abaixo:
                        </Text>

                        <Text>
                            {'\n'}
                        </Text>

                        <Input
                            label="SEU NOME"
                            value={Name}
                            onChangeText={(text) => setName(text)}
                            left={<TextInput.Icon icon="account" />}
                        />
                        <Input
                            label="SEU E-MAIL"
                            value={Email}
                            onChangeText={(text) => setEmail(text)}
                            left={<TextInput.Icon icon="email" />}
                        />
                        <Input
                            label="SEU TELEFONE"
                            value={TELEFONE}
                            onChangeText={(text) => setTelefone(text)}
                            left={<TextInput.Icon icon="cellphone-basic" />}
                        />
                        <Input style={styles.inputMensagem}
                            label="DIGITE SUA MENSAGEM AQUI!!"
                            value={mensagem}
                            onChangeText={(text) => setmensagem(text)}
                            left={<TextInput.Icon icon="message-text" />}
                        />
                        <Button mode="contained" onPress={() => console.log('Pressed')}>
                            Enviar Sua Mensagem
                        </Button>



                    </View>
                </ScrollView>
            </Body>
        </Container>
    );
};
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        margin: 5,
    },
    titulo: {
        textAlign: 'center',
        margin: 2,
        fontWeight: 'bold',
        fontSize: 20,
    },
    marcador: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'red'
    },
    inputMensagem: {
        height: 200,
        backgroundColor: '#90ee90',
        marginBottom: 8,
    }
});

export default Contato;