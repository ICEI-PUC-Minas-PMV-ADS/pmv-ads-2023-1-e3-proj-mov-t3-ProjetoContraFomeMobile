# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada através de reuniões periódicas entre os integrantes do grupo, praticando um brainstorming, trabalho de pesquisa em reportagens e publicações acadêmicas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas tabelas que se seguem.

<table border="1" width="70%">
<tr>
    <th></th>
    <td></td>
</tr>
<tr>
    <th rowspan="2"><img src="./img/laura.png" width="800"></th>  
    <td colspan="2" align="right"><b>Isabela</b> </td>
</tr>
<tr>
    <td><b>Idade:</b> 35 <br><br> <b>Dificuldades:</b> Sua maior dificuldade foi encontrar um APP que reúna pontos de coleta para doações de mantimentos próximos à sua residência 

 <br><br>       
    </td> 
    <br>
    <td><b>Em relação ao projeto: </b> Disse que usaria uma aplicação móvel ou site que ajudasse pessoas em vulnerabilidade social a encontrarem pontos de distribuição gratuita de alimentos e refeições. O ponto de distribuição gratuita de alimentos deverá fornecer pontos de coleta para doações de mantimentos próximos a sua residência. 
    </td>  
</tr>
</table>

<table border="1" width="70%">
<tr>
    <th></th>
    <td></td>
</tr>
<tr>
    <th rowspan="2"><img src="./img/carlos.jpg" width="900"></th> 
    <td colspan="2" align="right"><b>Carlos</b></td>
</tr>
<tr>
    <td><b>Idade:</b> 19 <br><br> <b>Dificuldades:</b> Sente que necessita ajudar a combater a fome no Brasil. Para isso, considera necessário ter uma aplicação móvel que reúna todos os pontos de coleta para doação de mantimentos próximo de sua residência e próximo ao seu local de trabalho. Para ele, a aplicação deve ser amigável, acessível e bem projetada.
 <br><br>     
    </td> 
    <td> <b>Em relação ao projeto:</b> Apresentou entusiasmo ao saber que vai ser desenvolvido um APP que pode fornecer pontos de coleta para doações de mantimentos de forma permanente e não quando acontece algum tipo de catástrofe. 
    </td>  
</tr>

<table border="1" width="70%">
<tr>
    <th></th>
    <td></td>
</tr>
<tr>
    <th rowspan="2"><img src="./img/joaopedro.png" width="800"></th>
    <td colspan="2" align="right"><b>Juarez</b></td>
</tr>
<tr>
    <td><b>Idade:</b> 15 <br><br> <b>Dificuldades:</b> Morador da periferia e ativista, sente que precisa fazer algo para amenizar o sofrimento da população em situação de vulnerabilidade social. Sente que precisa de um APP que crie um mapa contendo pontos de mobilização social, que receba doações de alimentos e itens de necessidade básica.
 <br><br>     
    </td> 
    <td> <b>Em relação ao projeto:</b> Ficou super interessado e disse que usaria uma aplicação móvel que fornecesse ferramentas que viabilizassem a procura de pontos de coleta de doações.
    </td>  
</tr>

<table border="1" width="70%">
<tr>
    <th></th>
    <td></td>
</tr>
<tr>
    <th rowspan="2"><img src="./img/Barbaraa.jpg" width="400"></th>
    <td colspan="2" align="right"><b>Barbara</b></td>
</tr>
<tr>
    <td><b>Idade:</b> 60 <br><br> <b>Dificuldades:</b> Precisa de uma aplicação segura e transparente para realizar doações financeiras a uma instituição que distribui mantimentos. 
 <br><br>     
    </td> 
    <td> <b>Em relação ao projeto:</b> Disse que usaria um aplicativo que fosse transparente e mostrasse para onde a sua doação estava indo, pois ela possui maior facilidade em utilizar um aplicativo no celular do que um site através do computador. 
    </td>  
</tr>
</table>


## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Isabella  | Uma aplicação que forneça pontos de coleta para doações de mantimentos próximo a minha residência | Para ajudar pessoas em vulnerabilidade social.| 
|Carlos    | Pesquisar por locais próximos à minha residência e ao meu trabalho, para que eu possa doar alimentos| Sente que necessita ajudar a combater a fome no Brasil.|
|Juarez |Um APP que contenha um mapa com pontos de mobilização social e que receba doações de alimentos e itens de necessidade básica. | Sente que precisa ajudar as pessoas que possuem vulnerabilidade social, principalmente realizando doações de itens de necessidade básica  |
|Barbara |Um aplicativo seguro e transparente para realizar doações financeiras a uma instituição que distribui mantimentos.|Ajudar o próximo através de doações financeiras.|

## Requisitos

A tabela a seguir apresenta os requisitos funcionais do projeto, identificando suas respectivas prioridades de entrega.
    
### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve apresentar uma aba no cabeçalho para com um botão Login para as instituições acessarem suas contas ou criar uma conta.   | ALTA | 
|RF-002| A aplicação deve conter um formulário de cadastro de novas campanhas para as instituições.  | ALTA |
|RF-003| A aplicação deve apresentar funcionalidades para que as instituições possam gerenciar as doações e campanhas.    | ALTA | 
|RF-004| A aplicação deve conter uma notificação para confirmar o recebimento de doações.   | ALTA |
|RF-005| A aplicação deve apresentar a possibilidade de mostrar ao usuário o local de recebimento de mantimento, para o caso de doações físicas.   | MÉDIA | 
|RF-006| A aplicação deve permitir que dentro da conta da instituição, apareçam as opções de criar novas campanhas de recebimento de alimentos e (excluir ou editar) as campanhas cadastradas.   | MÉDIA| 
|RF-007| A aplicação deve colher o aceite do usuário para os termos de Política de Cookies / Privacidade, flutuante com alinhamento vertical inferior, e horizontal ao centro.    |ALTA |
|RF-008| A aplicação deve conter uma página de "Fale com Nosso Encarregado de Dados" (DPO) atendendo à LGPD, contendo um formulário colhendo nome, e-mail, telefone, assunto e texto.    |ALTA |
|RF-009| A aplicação deve conter uma página de "Política de Privacidade” contendo informações sobre a privacidade.  | ALTA | 
|RF-010| A  aplicação deve permitir que o usuário realize suas doações.  | ALTA | 
|RF-011| A aplicação deve validar o login da instituição.    | ALTA |
|RF-012| A aplicação deve ter a possibilidade de redefinir senha.   | ALTA |
|RF-013| A aplicação deve conter uma página de “Fale conosco”.   | BAIXA | 
|RF-014| A aplicação deve apresentar imagens que auxiliem o entendimento do leitor para cada assunto exposto no corpo da página.    | ALTA |
|RF-015| A aplicação deve apresentar um rodapé com os contatos da página, contendo telefone, Whatsapp, Instagram, e-mail.  | ALTA | 
|RF-016| A aplicação deve apresentar em todas as páginas, no footer, políticas de privacidade e termos de uso. | ALTA | 


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender, identificando suas prioridades de entrega.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser publicada em um ambiente acessível publicamente na Internet (GitHub Pages).    | ALTA | 
|RNF-002| A aplicação deve ser responsiva, permitindo a visualização em diversos modelos de celular.  |  ALTA | 
|RNF-003| A aplicação deve ter bom nível de contraste entre os elementos da tela em conformidade.      | MÉDIA | 
|RNF-004| A aplicação deve ser compatível com dispositivos Android e Ios.    | ALTA |
|RNF-005| O desenvolvimento front-end deve ser através do framework React Native.  | MÉDIA | 
|RNF-006| O sistema back-end deve ser desenvolvido na linguagem C#, podendo utilizar frameworks. |ALTA |
|RNF-007| O banco de dados utilizado é o MySQL.   | MÉDIA | 
|RNF-008| A aplicação deve ter pontuação acima de 50 no requisito “Desempenho”, verificado pelo Lighthouse no navegador Google Chrome.   | MÉDIA |
|RNF-009| A aplicação  deve ter pontuação acima de 50 no requisito “Práticas Recomendadas”, verificado pelo Lighthouse no navegador Google Chrome.   | MÉDIA | 
|RNF-010| A aplicação deve ter pontuação acima de 70 no requisito “Acessibilidade”, verificado pelo Lighthouse no navegador Google Chrome.  | MÉDIA |
|RNF-011| A aplicação deve ter pontuação acima de 60 no requisito “SEO”, verificado pelo Lighthouse no navegador Google Chrome.  | MÉDIA | 
|RNF-012| A aplicação deve apresentar a funcionalidade que permita o usuário alterar o tamanho da letra.  | MÉDIA | 
|RNF-013| A aplicação deve apresentar a funcionalidade de modificar o tamanho da imagem através da tecla ALT.   | MÉDIA | 


## Restrições

As restrições podem ser explicadas como tarefas que limitam e comprometem a execução e o desenvolvimento do projeto, servindo como marco delimitador daquilo que precisará ser realizado para que o projeto seja considerado pronto.  

 A tabela abaixo, apresenta as seguintes restrições do projeto. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| A aplicação deve ser restringida aos frameworks React Native e ASP. NET Core e as linguagens de programação Javascript e C#.   |
|RE-02| A aplicação deve ter a homologação das fases de testes (QA) e operação assistida antes do processo de subida para produção.        |
|RE-03| A aplicação deve conter a documentação técnica (Solution Design Document) para facilitar a equipe de suporte em futuros ajustes no código.    |
|RE-04| A aplicação deverá ficar restrita a um único idioma, que será o “pt-br” (português).          |
|RE-05| A aplicação deve ser entregue até o dia 05/06/2023. |
|RE-06| A aplicação deve ser publicada no GitHub.       |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
