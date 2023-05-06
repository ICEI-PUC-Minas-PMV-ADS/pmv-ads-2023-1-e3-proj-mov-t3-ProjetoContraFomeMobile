import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import Logo from '../Componentes/Logo';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UseContext';
import { Atualizar } from '../Services/AuthServices';

const HomeExterno_Botoes = () => {

    const navigation = useNavigation();
    const { setGastos2 } = useUser();

    const hand = async () => {
        let res = await Atualizar();
        setGastos2(res);
    }
    hand()
    return (
        <Container>
            <View style={styles.header}>
                <Logo />
            </View>
            <Text>
                {'\n'}
            </Text>

            <Headline style={styles.textHeader}>SE VOCÊ NÃO PASSA FOME TEM QUE SER PARTE DA SOLUÇÃO</Headline>
            <Body>
                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={() => navigation.navigate('AcessoDoacao')}>
                    <Text style={styles.buttonTextStyle}>
                        CLIQUE AQUI E FAÇA SUA DOAÇÃO!!
                    </Text>

                </Button>

                <Button
                    style={styles.button}
                    mode="outlined"
                    onPress={() => navigation.navigate('AcessoRegistrar')}>
                    <Text style={styles.buttonTextStyle}>
                        CLIQUE AQUI PARA CADASTRAR ONG!!
                    </Text>

                </Button>

                <Button
                    style={styles.button}
                    mode="outlined"
                    onPress={() => navigation.navigate('AcessoLogar')}>
                    <Text style={styles.buttonTextStyle}>
                        CLIQUE AQUI PARA FAZER LOGIN DA ONG!!
                    </Text>

                </Button>
            </Body>
        </Container>
    );
};


const styles = StyleSheet.create({
    button: {
        marginBottom: 8,
        backgroundColor: '#3F51B5',
        flex: 1,
        justifyContent: "center",
        color: '#fff',

    },

    textHeader: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    },
    header: {
        alignItems: "center",
        marginTop: 70,
        marginBottom: 12
    },
    buttonTextStyle: {
        color: 'white',
        marginBottom: 4,
        marginLeft: 10,
        fontWeight: 'bold',
    },

});

export default HomeExterno_Botoes;



