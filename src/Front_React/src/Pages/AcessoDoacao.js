import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Container from '../Componentes/Container';
import { List } from 'react-native-paper';
import { useUser } from '../contexts/UseContext';

const AcessoDoacao = () => {
    const navigation = useNavigation();
    const { gastos2 } = useUser();

    const renderItem = ({ item }) => (

        <List.Item
            title={`Nome da Ong: ` + item.nomeDaOng}
            description={`Nome da Campanha: ` + item.nomeDaCampanha}
            left={props => <List.Icon {...props} color={'green'} icon="copyright" />}

            onPress={() => navigation.navigate('CampanhasCadastradas', { item })}
        />

    );

    return (
        <Container>
            <Header title={'Escolha uma Campanha'} goBack={() => navigation.goBack()}>
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



});

export default AcessoDoacao







