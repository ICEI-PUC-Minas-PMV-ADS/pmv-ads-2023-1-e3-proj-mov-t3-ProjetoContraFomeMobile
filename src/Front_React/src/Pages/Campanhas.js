import Header from '../Componentes/Header';
import Body from '../Componentes/Body';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, View, FlatList, SafeAreaView } from 'react-native';
import Container from '../Componentes/Container';
import { List, Text, FAB } from 'react-native-paper';



import { useUser } from '../contexts/UseContext';
;

const Campanhas = () => {
    const navigation = useNavigation();
    const { gastos2 } = useUser();

    // useEffect(() => {

    //     Alert.alert(gastos2)


    // }, []);




    const renderItem = ({ item }) => (

        <List.Item
            title={`Nome da Ong: ` + item.nomeDaOng}
            description={`Nome da Campanha: ` + item.nomeDaCampanha}
            left={props => <List.Icon {...props} color={'green'} icon="copyright" />}
            //right={props => <Text {...props} style={{ alignSelf: 'center' }}>{item.estado}</Text>}

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

export default Campanhas







