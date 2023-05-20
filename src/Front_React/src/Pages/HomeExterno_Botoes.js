import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import Container from '../Componentes/Container';
import Body from '../Componentes/Body';
import Logo from '../Componentes/Logo';
import ModalComponent from '../Componentes/Modal/index'
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UseContext';
import { Atualizar } from '../Services/AuthServices';
import { List, Card, IconButton } from 'react-native-paper';

const HomeExterno_Botoes = () => {
    const { acceptTerm, gastos3, setGastos3, setGastos2 } = useUser();
    const [showModal, setShowModal] = useState(false)
    const navigation = useNavigation();

    useEffect(() => {
        hand()
        showAccepTerms()
    }, [])

    const hand = async () => {
        let res = await Atualizar();
        let a = [1, 2,3];
  
        setGastos2(res);
      
        if (Object.keys(res).length >= 3) {
            a[0] = res[0]
            a[1] = res[1]
            a[2] = res[2]
            setGastos3(a);
        } else {
            setGastos3(res);
        }


    }
    const showAccepTerms = () => {
        if (!acceptTerm) {
            setShowModal(true)
        }
    }

    const close = () => {
        setShowModal(false)
    }

    const renderItem = ({ item }) => (
        <Card>
            <Card.Title style={styles.card}
                title={<Text style={styles.letra} >{`Ong: ` + item.nomeDaOng}</Text>}
                subtitle={<Text style={styles.sub}  >{`Campanha: ` + item.nomeDaCampanha} </Text>}
                left={(props) => <List.Icon style={styles.camp} {...props} color={'green'} icon="copyright" />}
                right={(props) => <IconButton {...props} icon="cursor-default-click" />}

            />
        </Card>

    );


    return (
        <Container>
            <View>
                <Logo />
            </View>
            <Text style={styles.Doacao}>
                Doação
            </Text>
            <Text style={styles.textHeader}>
                Temos como objetivo criar um movimento de combate a fome em todo Brasil. Seja você empresa, grupo de comunicação, organização da sociedade civil ou cidadão, apoie os projetos e campanhas, que ajudam as ongs a arrecadarem um valor para combater a fome.
            </Text>
            <Body>
                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={() => navigation.navigate('AcessoDoacao')}>
                    <Text style={styles.buttonTextStyle}>
                        CLIQUE AQUI PARA DOAR
                    </Text>
                </Button>
                <Text style={styles.Andamento}>
                    Campannhas em andamento
                </Text>

                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={gastos3}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={() => navigation.navigate('AcessoDoacao')}>
                    <Text style={styles.buttonTextStyle}>
                        VEJA MAIS CAMPANHAS
                    </Text>
                </Button>
            </Body>

            <ModalComponent showModal={showModal} closeModal={close} />
        </Container>
    );
};


const styles = StyleSheet.create({
    button: {
        marginBottom: 12,
        marginTop: 12,
        backgroundColor: '#6a5acd',
        flex: 0.19,
        justifyContent: "center",
        width: "100%",
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },

    textHeader: {
        textAlign: 'center',
        color: 'black',
        fontSize: 14,


    },

    buttonTextStyle: {
        color: 'white',
        fontSize: 13,

    },
    Doacao: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    Andamento: {
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    container: {
        flex: 0.81
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        textAlign: 'center',
    },
    title: {
        fontSize: 32,
    },
    text: {
        textAlign: 'center',
        margin: 10,
    },
    card: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DFE9F5',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 5,
        marginRight: 5,


    },
    letra: {
        fontSize: 19,
    },
    sub: {
        fontSize: 11,
    },
});

export default HomeExterno_Botoes;



