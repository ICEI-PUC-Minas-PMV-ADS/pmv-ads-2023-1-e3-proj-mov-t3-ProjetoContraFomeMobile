import { useState } from "react";
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity } from "react-native"
import { Checkbox } from 'react-native-paper';
import { useUser } from "../../contexts/UseContext";

const ModalComponent = ({ showModal, closeModal }) => {
    const [acceptTerms, setAcceptTerms] = useState(false)
    const [showError, setShowError] = useState(false)
    const {setAcceptTerm} = useUser()

    function validationTerms() {
        if(acceptTerms) {
            setAcceptTerm(true)
            closeModal()
        } else {
            setShowError(true)
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <ScrollView>
                        <View>
                            <Text style={styles.titulo}>
                                TERMOS DE USO — Projeto Contra Fome
                            </Text>

                            <Text>
                                Projeto Contra Fome, pessoa jurídica de direito privado descreve, através deste documento, as regras de uso do site e qualquer outro site, loja ou aplicativo operado pelo proprietário.
                                Ao navegar neste website, consideramos que você está de acordo com os Termos de Uso abaixo.
                                Caso você não esteja de acordo com as condições deste contrato, pedimos que não faça mais uso deste website, muito menos cadastre-se ou envie os seus dados pessoais.
                                Se modificarmos nossos Termos de Uso, publicaremos o novo texto neste website, com a data de revisão atualizada. Podemos alterar este documento a qualquer momento. Caso haja alteração significativa nos termos deste contrato, podemos informá-lo por meio das informações de contato que tivermos em nosso banco de dados ou por meio de notificações.
                                A utilização deste website após as alterações significa que você aceitou os Termos de Uso revisados. Caso, após a leitura da versão revisada, você não esteja de acordo com seus termos, favor encerrar o seu acesso.
                            </Text>

                            <Text style={styles.titulo}>
                                Seção 1 - Usuário
                            </Text>
                            <Text>
                                A utilização deste website atribui de forma automática a condição de Usuário e implica a plena aceitação de todas as diretrizes e condições incluídas nestes Termos.
                            </Text>

                            <Text style={styles.titulo}>
                                Seção 2 - Adesão em conjunto com a Política de Privacidade
                            </Text>
                            <Text>
                                A utilização deste website acarreta a adesão aos presentes Termos de Uso e a versão mais atualizada da Política de Privacidade de Projeto Contra Fome.
                            </Text>

                            <Text style={styles.titulo}>
                                Seção 3 - Condições de acesso
                            </Text>
                            <Text>
                                Em geral, o acesso ao website da Projeto Contra Fome possui caráter gratuito e não exige prévia inscrição ou registro. Contudo, para usufruir de algumas funcionalidades, o usuário poderá precisar efetuar um cadastro, criando uma conta de usuário com login e senha próprios para acesso. É de total responsabilidade do usuário fornecer apenas informações corretas, autênticas, válidas, completas e atualizadas, bem como não divulgar o seu login e senha para terceiros. Partes deste website oferecem ao usuário a opção de publicar comentários em determinadas áreas. Projeto Contra Fome não consente com a publicação de conteúdos que tenham natureza discriminatória, ofensiva ou ilícita, ou ainda infrinjam direitos de autor ou quaisquer outros direitos de terceiros. A publicação de quaisquer conteúdos pelo usuário deste website, incluindo mensagens e comentários, implica em licença não-exclusiva, irrevogável e irretratável, para sua utilização, reprodução e publicação pela Projeto Contra Fome no seu website, plataformas e aplicações de internet, ou ainda em outras plataformas, sem qualquer restrição ou limitação.
                            </Text>

                            <Text style={styles.titulo}>
                                Seção 4 - Cookies
                            </Text>
                            <Text>
                                Informações sobre o seu uso neste website podem ser coletadas a partir de cookies. Cookies são informações armazenadas diretamente no computador que você está utilizando. Os cookies permitem a coleta de informações tais como o tipo de navegador, o tempo despendido no website, as páginas visitadas, as preferências de idioma, e outros dados de tráfego anônimos. Nós e nossos prestadores de serviços utilizamos informações para proteção de segurança, para facilitar a navegação, exibir informações de modo mais eficiente, e personalizar sua experiência ao utilizar este website, assim como para rastreamento online. Também coletamos informações estatísticas sobre o uso do website para aprimoramento contínuo do nosso design e funcionalidade, para entender como o website é utilizado e para auxiliá-lo a solucionar questões relevantes. Caso não deseje que suas informações sejam coletadas por meio de cookies, há um procedimento simples na maior parte dos navegadores que permite que os cookies sejam automaticamente rejeitados, ou oferece a opção de aceitar ou rejeitar a transferência de um cookie (ou cookies) específico(s) de um site determinado para o seu computador. Entretanto, isso pode gerar inconvenientes no uso do website. As definições que escolher podem afetar a sua experiência de navegação e o funcionamento que exige a utilização de cookies. Neste sentido, rejeitamos qualquer responsabilidade pelas consequências resultantes do funcionamento limitado deste website provocado pela desativação de cookies no seu dispositivo (incapacidade de definir ou ler um cookie).
                            </Text>

                            <Text style={styles.titulo}>
                                Seção 5 - Propriedade Intelectual
                            </Text>

                            <Text>
                                Todos os elementos de Projeto Contra Fome são de propriedade intelectual da mesma ou de seus licenciados. Estes Termos ou a utilização do website não concede a você qualquer licença ou direito de uso dos direitos de propriedade intelectual da Projeto Contra Fome ou de terceiros.
                            </Text>

                            <Text style={styles.titulo}>
                                Seção 6 - Links para sites de terceiros
                            </Text>

                            <Text>
                                Este website poderá, de tempos a tempos, conter links de hipertexto que redirecionará você para sites das redes dos nossos parceiros, anunciantes, fornecedores etc. Se você clicar em um desses links para qualquer um desses sites, lembre-se que cada site possui as suas próprias práticas de privacidade e que não somos responsáveis por essas políticas. Consulte as referidas políticas antes de enviar quaisquer Dados Pessoais para esses sites. Não nos responsabilizamos pelas políticas e práticas de coleta, uso e divulgação (incluindo práticas de proteção de dados) de outras organizações, tais como Facebook, Apple, Google, Microsoft, ou de qualquer outro desenvolvedor de software ou provedor de aplicativo, loja de mídia social, sistema operacional, prestador de serviços de internet sem fio ou fabricante de dispositivos, incluindo todos os Dados Pessoais que divulgar para outras organizações por meio dos aplicativos, relacionadas a tais aplicativos, ou publicadas em nossas páginas em mídias sociais. Nós recomendamos que você se informe sobre a política de privacidade e termos de uso de cada site visitado ou de cada prestador de serviço utilizado.
                            </Text>

                            <Text style={styles.titulo}>
                                Seção 7 - Prazos e alterações
                            </Text>

                            <Text>
                                O funcionamento deste website se dá por prazo indeterminado. O website no todo ou em cada uma das suas seções, pode ser encerrado, suspenso ou interrompido unilateralmente por Projeto Contra Fome, a qualquer momento e sem necessidade de prévio aviso.
                            </Text>

                            <Text style={styles.titulo}>
                                Seção 8 - Dados pessoais
                            </Text>

                            <Text>
                                Durante a utilização deste website, certos dados pessoais serão coletados e tratados por Projeto Contra Fome e/ou pelos Parceiros. As regras relacionadas ao tratamento de dados pessoais de Projeto Contra Fome estão estipuladas na Política de Privacidade.
                            </Text>

                            <Text style={styles.titulo}>
                                Seção 9 - Contato
                            </Text>

                            <Text>
                                Caso você tenha qualquer dúvida sobre os Termos de Uso, por favor, entre em contato pelo e-mail Jorge345781@hotmail.com.
                            </Text>

                        </View>

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

                            <Text style={styles.titulo}>
                                Compromisso do Usuário
                            </Text>

                            <Text>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Projeto Contra Fome oferece no site e com caráter enunciativo, mas não limitativo:</Text>
                            <Text>
                                <Text style={styles.marcador}>A)</Text> Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                            </Text>
                            <Text>
                                <Text style={styles.marcador}>B)</Text>  Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ERROR ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                            </Text>
                            <Text>
                                <Text style={styles.marcador}>C)</Text>  Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Projeto Contra Fome, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                            </Text>

                            <Text style={styles.titulo}>
                                Mais informações
                            </Text>

                            <Text>
                                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                            </Text>
                        </View>
                    </ScrollView>

                    <View style={styles.containerTerms}>
                        <Checkbox
                            status={acceptTerms ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setAcceptTerms(!acceptTerms)
                            }}
                        />
                        <Text>
                            Você aceita os termos de uso?
                        </Text>
                    </View>

                    {
                        showError && (
                            <Text style={styles.textError}>Aceite os termos de uso para continuar!!</Text>
                        )
                    }

                    <TouchableOpacity activeOpacity={0.7} onPress={validationTerms}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.textButton}>Aceitar os termos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0005",
    },
    modalContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        width: "90%",
        height: "65%",
        padding: 16
    },
    text: {
        textAlign: 'center',
        margin: 10,
    },
    titulo: {
        textAlign: 'left',
        margin: 2,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    marcador: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'red'
    },
    containerTerms: {
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    buttonContainer: {
        width: "100%",
        height: 50,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        padding:10
    },
    textButton: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight:"bold"
    },
    textError: {
        marginBottom: 10,
        color: "red"
    }
});

export default ModalComponent;