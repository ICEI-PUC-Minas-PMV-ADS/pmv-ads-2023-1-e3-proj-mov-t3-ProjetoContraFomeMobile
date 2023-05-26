import React, { useState } from 'react';
//import { StyleSheet, } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//import { Text } from 'react-native-paper';
import Container from '../Componentes/Container';
import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import Input from '../Componentes/input';
import { TextInput, Button } from 'react-native-paper';


const Sobre = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [TELEFONE, setTelefone] = useState('');
    const [mensagem, setmensagem] = useState('');


    return (
        <Container >

            <Header title={'Sobre Nós'} />
            <Body >
                <ScrollView contentContainerStyle={styles.text}>
                    <View>

                        <Text style={styles.titulo}>
                            Sobre Nós
                        </Text>


                        <Text>
                            O dia 8 de junho de 2022 ficará marcado para sempre na história do Brasil como a data em que o país soube das catástrofe em curso: 15% da nossa população não tem o direito básico à alimentação, garantido pela nossa Constituição desde 2010.

                            São 33 milhões de pessoas passando fome e 125 milhões em insegurança alimentar. Saímos do Mapa da Fome da ONU em 2014, e apenas oito anos depois, temos o pior número da história. Um brasileiro com fome já é muito; 15% é inaceitável.

                            A meta do Brasil erradicar a fome até 2030, como Objetivo de Desenvolvimento Sustentável 2 da ONU (Fome Zero), é hoje uma miragem distante.

                            Em 1993, quando 32 milhões de pessoas passavam fome, nascia a Ação da Cidadania em um chamado à sociedade feito pelo sociólogo Herbert de Souza, o Betinho, que mobilizou 30 milhões de voluntários para combater a fome.

                            A mesma indignação que moveu Betinho e o Brasil inteiro em 93 é a mesma que nos move em 2022, quase 30 anos depois a criar este pacto. Independente de ideologia, religião ou partido, a Fome é inaceitável.

                            Betinho sabia que a solução definitiva da fome vem da redução da miséria e da desigualdade, com emprego, renda, saúde e educação, mas ele também cunhou a famosa frase “Quem Tem Fome Tem Pressa”, que diz claramente que, enquanto a solução não chega, as pessoas não podem esperar.

                            É preciso agir agora para salvar vidas e futuras gerações dos nossos irmãos: Se você não passa fome, seja parte da solução.

                            Por isso, nós, alunos da PUC MINAS criamos este site e queremos te convocar a fazer parte deste grande movimento de combate à fome em todo o Brasil. Seja você empresa, grupo de comunicação, organização da sociedade civil ou cidadão, entre na plataforma projetocontrafome.com e apoie campanhas, crie projetos, dedique tempo ao voluntariado, invista em ações de combate à fome, mobilize-se.
                        </Text>

                    </View>

                    <View>

                        <Text style={styles.titulo2}>
                            Fale Conosco
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.text}>
                            Está com algum problema ou dúvida?

                            Nós podemos te ajudar, basta preencher o formulário abaixo:
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
                        <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                            <Text style={styles.buttonTextStyle}>
                                Envie Sua Mensagem
                            </Text>
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
        margin: 10,
        marginBottom: 10,
    },
    titulo: {
        textAlign: 'left',
        margin: 2,
        fontWeight: 'bold',
        fontSize: 25,
    },
    marcador: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'red'
    },

    titulo2: {
        textAlign: 'center',
        margin: 2,
        fontWeight: 'bold',
        fontSize: 23,
        marginTop: 15,
    },
    inputMensagem: {
        height: 200,
        backgroundColor: '#90ee90',
        marginHorizontal: 8,
    },
    distancia: {
        marginTop: 8,
        marginBottom: 8,
    },
    conta: {
        marginLeft: 0
    },
    button: {
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: '#6a5acd',
        flex: 0.19,
        justifyContent: "center",
        //width: "100%",
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        margin:8
    },
    buttonTextStyle: {
        color: 'white',
        fontSize:13,

    },

});

export default Sobre;