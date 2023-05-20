import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Container from '../Componentes/Container';
import { List, Card, IconButton, Text } from 'react-native-paper';
import { useUser } from '../contexts/UseContext';

const AcessoDoacao = () => {
    const navigation = useNavigation();
    const { gastos2 } = useUser();

    const renderItem = ({ item }) => (
        <Card onPress={() => navigation.navigate('CampanhasCadastradas', { item })}>
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
            <Header title={'Click no Card da Campanha'} goBack={() => navigation.goBack()}>
            </Header>
            <Body>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={gastos2}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>

            </Body>

        </Container>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: 120,
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

export default AcessoDoacao







