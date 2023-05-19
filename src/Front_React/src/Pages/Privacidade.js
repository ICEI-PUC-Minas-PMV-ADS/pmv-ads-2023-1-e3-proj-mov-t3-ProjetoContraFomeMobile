import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../Componentes/Container';
import Header from '../Componentes/Header';
import Body from '../Componentes/Body';


const Privacidade = () => {
    return (
        <Container>
            <Header title={'Política de Privacidade'} />
            <Body>
                <ScrollView contentContainerStyle={styles.text}>
                    <View>
                        <Text style={styles.titulo}>
                            Política de Privacidade
                        </Text>

                        <Text>
                            A sua privacidade é importante para nós. É política do Projeto Contra Fome respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Projeto Contra Fome, e outros sites que possuímos e operamos.
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                        </Text>
                        <Text>
                            {'\n'}
                        </Text>
                        <Text style={styles.titulo}>
                            Compromisso do Usuário
                        </Text>

                        <Text>
                            <Text>
                                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Projeto Contra Fome oferece no site e com caráter enunciativo, mas não limitativo:
                            </Text>
                            <Text>
                                {'\n'}
                            </Text>
                            <Text>
                                {'\n'}
                            </Text>

                            <Text style={styles.marcador}>A)</Text> Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                            <Text>
                                {'\n'}
                            </Text>
                            <Text>
                                {'\n'}
                            </Text>
                            <Text style={styles.marcador}>B</Text>  Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ERROR ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                            <Text>
                                {'\n'}
                            </Text>
                            <Text>
                                {'\n'}
                            </Text>
                            <Text style={styles.marcador}>C)</Text>  Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Projeto Contra Fome, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.

                        </Text>
                        <Text>
                            {'\n'}
                        </Text>
                        <Text style={styles.titulo}>
                            Mais informações
                        </Text>

                        <Text>
                            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                        </Text>
                        <Text>
                            {'\n'}
                        </Text>
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
    },
    titulo: {
        textAlign: 'left',
        margin: 2,
        fontWeight: 'bold',
        fontSize: 20,
    },
    marcador: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'red'
    }
});

export default Privacidade;