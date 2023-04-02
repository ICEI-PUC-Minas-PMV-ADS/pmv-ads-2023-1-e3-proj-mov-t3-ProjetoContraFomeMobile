# Plano de Testes de Software

## PROJETO CONTRA A FOME

Usabilidade do site do Projeto Contra a Fome indicada no endereço abaixo:
Projeto Contra Fome FrontEnc(React-Native) e BackEnd (github.com)  

## Introdução

Este plano de Teste visa verificar o funcionamento das etapas de implantação do Aplicativo do Projeto Contra a Fome. 
Acredita-se que a usabilidade da interface do Aplicativo em todo o período de testes seguirá os padrões conhecidos de boas práticas de uso. 

Os requisitos para a execução para este teste são:

## Teste de navegabilidade

| Caso de Teste CT-01: | Realizar login para acesso e/ou criação de contas das instituições.| 
| --- | --- |
| Objetivo do teste | Verificar se o usuário instituição consegue se cadastrar e/ou acessar o ambiente do sistema.|
| Passos(Criação do Cadastro) | 1. Acessar o aplicativo através do celular. 2. Na tela de login/cadastro, realizar o cadastro no botão destinado para o cadastro. 3. O usuário será direcionado para o formulário de cadastro. 4. Preencher os campos obrigatórios. 5. Clicar em "Cadastrar". |
| Passos(Acesso às Contas) | 1. Acessar o aplicativo através do celular. 2. Na tela de login/cadastro, realizar o realizar o login inserindo as credenciais de acesso. 3. Clicar em “Entrar”. |
| Caso de sucesso | 1. Em caso de criação de cadastro, o sistema deverá retornar uma mensagem informando o sucesso do cadastro, “Cadastro realizado com sucesso”. 2. Em caso de já existir cadastro, realizar o login com o usuário desejado, se o login funcionar corretamente, será direcionado para tela principal do sistema.  |
| Caso de insucesso - Criação do Cadastro (Restrições) |1. Ao inserir uma credencial de acesso já cadastrada o sistema deverá retornar uma mensagem de erro informando, “usuário já cadastrado”. 2. Ao inserir alguma informação inválida no formulário de cadastro, o sistema deverá informar que os dados informados são inválidos. 3. Ao deixar algum campo sem preenchimento no formulário de cadastro, o sistema não deverá permitir a continuidade do cadastro e exibir alerta, caso algum campo seja de preenchimento obrigatório.|
| Caso de insucesso Acesso às Contas (Restrições) |1. Ao inserir uma credencial não existente ou uma senha inválida o sistema deverá retornar uma mensagem de erro informando, “usuário ou senha inválidos”. 2. Ao deixar um campo sem preenchimento, o sistema deverá retornar, “usuário ou senha não informados”.  |

| Caso de Teste CT-02: |Realizar cadastro de campanhas| 
| --- | --- |
| Objetivo do teste |Verificar se a instituição cadastrada é capaz de realizar o gerenciamento das campanhas que foram criadas por ela.|
| Passos|1.Acessar o aplicativo através do celular. 2.Realizar o login no sistema com o usuário desejado. 3.Na tela principal, clicar no botão referente às campanhas cadastradas pela instituição logada. 4.Deverá abrir uma tela de gerenciamento, em formato de tabela, das campanhas cadastradas. 5.Clicar na opção desejada de gerenciamento (Editar ou Deletar). 6.Ao clicar em editar será possível realizar o gerenciamento das doações. |
| Caso de sucesso |Em caso de êxito, o usuário deverá ser capaz de realizar o gerenciamento das doações para cada campanha de forma individual.  |
| Caso de insucesso - (Restrições) |1.Ao inserir no formulário os dados, se a campanha já estiver cadastrada deverá apresentar uma mensagem de erro informando que a campanha já foi cadastrada. 2.Ao inserir no formulário o CNPJ, CPF ou CEP o sistema deverá puxar os dados e inserir automaticamente. 3.Ser obrigatórios o preenchimento dos campos . 4. Se a campanha já estiver registrada, deverá retornar automaticamente para a tela de login e redefinição de senha. 5.A tabela de campanhas ativas será por ordem de campanhas recentes para as mais antigas. |


|Caso de Teste CT-03: |Realizar gerenciamento campanhas cadastradas.| 
| --- | --- |
| Objetivo do teste |Verificar se a instituição cadastrada é capaz de realizar o cadastro de campanhas para arrecadação. |
| Passos|1.Acessar o aplicativo através do celular. 2.Realizar o login no sistema com o usuário desejado. 3.Na tela principal clicar no botão para cadastro de novas campanhas. 4.Preencher o formulário com os dados necessários para cadastro da campanha.  |
| Caso de sucesso | Em caso de êxito, a campanha cadastrada deverá aparecer na tabela de campanhas ativas do usuário que a cadastrou, com a informação do nome da instituição.|

|Caso de Teste CT-04: |Verificar notificações de doações| 
| --- | --- |
| Objetivo do teste |Verificar as doações realizadas para cada campanha cadastrada.|
| Passos|1.Acessar o aplicativo através do celular. 2.Realizar o login no sistema com o usuário desejado. 3.Na tela principal, clicar no botão referente às campanhas cadastradas pela instituição logada.4.Deverá abrir uma tela de gerenciamento, em formato de tabela, das campanhas cadastradas. 5.Na tela de gerenciamento verificar as notificações, na parte inferior, realizadas para as campanhas cadastradas.  |
| Caso de sucesso |Em caso de êxito, o usuário deverá ser capaz de visualizar todas as doações realizadas para a campanhas cadastradas.|
| Caso de insucesso|O usuário não conseguirá visulaizar as doações recebidas pelos doares via Pix e Cartão de crédito, devido a falhas na API.|


|Caso de Teste CT-05: | A aplicação deve apresentar a possibilidade de mostrar ao usuário o local de recebimento de mantimento, para o caso de doações físicas. | 
| --- | --- |
| Objetivo do teste |Verificar se o usuário tem acesso as informações do local de recebimento da doação física.|
| Passos|1.Acessar o aplicativo através do celular. 2.Realizar o login no sistema com o usuário desejado. 3.Na tela principal, clicar no botão referente às minhas doações. 4.Clicar na campanha que o usuário realizou a doação para ver mais informações.  |
| Caso de sucesso |Em caso de êxito, o usuário deverá ser capaz de visualizar todas as informações referente a campanha , como: em caso de doação em dinheiro, qual a forma de pagamento, os dados da conta. No caso de doação física qual o endereço, os itens que foram doados, informações da Campanha e etc. |
| Caso de insucesso|O usuário não conseguirá visulaizar as informaçãos sobre uma determinada campanha|

|Caso de Teste CT-06: |Verificar criação, exclusão e edição de campanhas. | 
| --- | --- |
| Objetivo do teste |O sistema deverá ser capaz de realizar criação de campanhas, edição de campanhas existentes ou a sua exclusão. |
| Passos - Criação de uma Campanha|1.Acessar o aplicativo através do celular. 2.Realizar o login no sistema com o usuário desejado. 3.Na tela principal deverá existir um botão para cadastro de novas campanhas.|
| Passos - Edição e exclusão de campanhas|1.Acessar o aplicativo através do celular. 2.Realizar o login no sistema com o usuário desejado. 3.Na tela principal, clicar no botão referente às campanhas cadastradas pela instituição logada. 4.Deverá abrir uma tela de gerenciamento, em formato de tabela, das campanhas cadastradas. 5.Deverá existir dois botões para edição ou exclusão da campanha desejada. 6.Clicar na opção desejada de gerenciamento (Editar ou Deletar).|
| Caso de sucesso |1.Em caso de êxito o usuário deverá ser capaz de excluir a campanha desejada e uma confirmação deverá aparecer na tela, “Campanha excluída com sucesso”, caso a campanha tenha sido excluída com sucesso. 2.Se o usuário desejar editar alguma informação da campanha, ao clicar no botão editar ele será direcionado para uma tela com a informações que ele poderá editar, ele deverá alterar o que deseja e clicar em salvar, se for bem sucedido deverá retornar uma mensagem de “Modificações realizadas com sucesso”.|

|Caso de Teste CT-08: |Verificar envio de mensagens para o suporte | 
| --- | --- |
| Objetivo do teste |O sistema deverá ser capaz de receber mensagens dos usuários informando algum erro, duvidas ou sugestões, referentes ao sistema.|
| Passos|1.Acessar o aplicativo através do celular. 2. Na tela Home deverá clicar no icone Contatos. 3. Em seguida deverá abrir uma opção de bate papo, onde o usuário poderá enviar uma mensagem para o suporte.|
| Caso de sucesso |Em caso de êxito, o usuário deverá ser direcionado para a tela onde existem os campos a serem preenchidos e deverá conseguir submeter a dúvida informada. |
| Caso de insucesso |Em caso de insucesso deve aparecer uma mensagem para o usuário informando que a dúvida/sugestão dele não foi enviada para o setor de suporte, após o mesmo clicar em submeter o envio da mensagem|

|Caso de Teste CT-09: |Realizar acesso à política de privacidade.| 
| --- | --- |
| Objetivo do teste |O sistema deverá disponibilizar para os usuários a política de privacidade do tratamento de dados pessoais.|
| Passos|1.Acessar o aplicativo através do celular. 2. Após acesso, a política de privacidade deverá ficar disponível no icone Privacidade|
| Caso de sucesso |Em caso de êxito, a política de privacidade deverá aparecer na tela para que o usuário possa realizar consultas|

|Caso de Teste CT-10: |Verificar a realização de doações para campanhas| 
| --- | --- |
| Objetivo do teste |O sistema deverá ser capaz de aceitar doações de usuários para uma determinada campanha.|
| Passos|1. Acessar o aplicativo através do celular. 2.Na tela de doações clicar no campo “CLIQUE AQUI PARA FAZER SUA DOAÇÃO” 3.Na tela em que o usuário for direcionado, escolher a forma de doação. 4.Informar o valor a ser doado.  5.Clicar no botão “Realizar doação”.|
| Caso de sucesso |Em caso de êxito deverá retornar uma mensagem para o usuário “Doação realizada com sucesso”.|
| Caso de insucesso |Em caso de insucesso deverá aparecer uma mensagem na tela do usuário informando para corrigir valor digitado, marcar o formato de doação pix ou Cartão de Crédito.|

|Caso de Teste CT-11: |Verificar validação de cadastro do usuário.| 
| --- | --- |
| Objetivo do teste |Realizar a validação do usuário cadastrado, aumentando a segurança da aplicação.|
| Passos|1.Acessar o aplicativo através do celular. 2.Na tela de login/cadastro, realizar o cadastro no botão destinado para o cadastro 3.O usuário será direcionado para o formulário de cadastro. 4.Preencher os campos obrigatórios. 5.Clicar em "Cadastrar". |
| Caso de sucesso |Em caso de êxito, deverá ser enviado um e-mail para a instituição solicitando a confirmação de validação do cadastro.|
| Caso de insucesso |Em caso de insucesso deve aparecer uma mensagem para o usuário informando o motivo da impossibilidade qeu pode ser erro no CNPJ, senha com segurança fraca, falta de informações ao cadastrar no cadastro|

|Caso de Teste CT-12: |Verificar redefinição de senhas de usuários| 
| --- | --- |
| Objetivo do teste |O sistema deverá ser capaz de realizar a atualização de senha de acesso ao aplicativo caso o usuário deseje.|
| Passos|1.Acessar o aplicativo através do celular. 2.Na tela de login/cadastro, realizar o realizar o login inserindo as credenciais de acesso.3.Clicar em “Entrar”. 4.Clicar no campo destinado à foto dentro do ambiente do usuário. 5.Escolher a opção de “Gerenciar conta” 6.Dentro do gerenciamento da conta escolher a opção para mudança de senhas. 7.Informar a senha atual e definir a nova senha desejada. 8.Clicar em “Alterar senha” |
| Caso de sucesso |Em caso de êxito, deverá aparecer uma mensagem na tela “Senha modificada com sucesso” e o usuário deverá conseguir realizar o acesso ao sistema com a nova senha cadastrada. |
| Caso de insucesso |Em caso de insucesso deve aparecer uma mensagem para o usuário informando que a senha é inválidada pois é igual a atual ou não possui os caracteres desejados para segurança.|

|Caso de Teste CT-15: |Verificar contato com a equipe de desenvolvimento.| 
| --- | --- |
| Objetivo do teste |Verificação da existência das formas de contato entre o usuário e a equipe de desenvolvimento do aplicativo.|
| Passos|1.Acessar o aplicativo através do celular. 2.Na tela principal verificar o ícone destinado ao contato dos desenvolverdores do APP (telefone, whatsapp, instagram e e-mail.|
| Caso de sucesso |Em caso de êxito, ao se clicar no link disponibilizado, o usuário deverá ser direcionado para os contatos disponíveis.|
| Caso de insucesso |Em caso de insucesso não estará disponível a página com os contatos dos criadores da aplicação.|




