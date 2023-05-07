# Registro de Testes de Software

<span style="color:red">Esta seção apresenta as evidências e resultados dos testes definidos anteriormente em Plano de Testes de Software.</span>

# TESTE DE NAVEGABILIDADE

### Navegabilidade - Home
<img src="./img/Testes_imagem/Home.PNG" width="300">

### Navegabilidade - sobre nós
<img src="./img/Testes_imagem/SobreNos.PNG" width="300">

### Navegabilidade - Política de Privacidade
<img src="./img/Testes_imagem/Privacidade.PNG" width="300">

### Navegabilidade - Termo de Uso
<img src="./img/Testes_imagem/Termo.PNG" width="300">

### Navegabilidade - Fale Conosco
<img src="./img/Testes_imagem/FaleConosco.PNG" width="300">

### Navegabilidade - Login
<img src="./img/Testes_imagem/Login.PNG" width="300">


# TESTE DE LOGIN

# Teste de Login 1(Sucesso) e 2(Insucesso):
  
## Teste 1 - Realizar Login - (Caso de Sucesso)
| Caso de Teste CT-01: | Realizar login para acesso e/ou criação de contas das instituições.| 
| --- | --- |
| Objetivo do teste | Verificar se o usuário instituição consegue se cadastrar e/ou acessar o ambiente do sistema.|
| Passos(Criação do Cadastro) | 1. Acessar o aplicativo através do celular. 2. Na tela de login/cadastro, realizar o cadastro no botão destinado para o cadastro. 3. O usuário será direcionado para o formulário de cadastro. 4. Preencher os campos obrigatórios. 5. Clicar em "Cadastrar". |
| Passos(Acesso às Contas) | 1. Acessar o aplicativo através do celular. 2. Na tela de login/cadastro, realizar o realizar o login inserindo as credenciais de acesso. 3. Clicar em “Entrar”. |
| Caso de sucesso | 1. Em caso de criação de cadastro, o sistema deverá retornar uma mensagem informando o sucesso do cadastro, “Cadastro realizado com sucesso”. 2. Em caso de já existir cadastro, realizar o login com o usuário desejado, se o login funcionar corretamente, será direcionado para tela principal do sistema.  |


<img src="./img/Testes_imagem/Login.PNG" width="300">

### Usuário logado - (Caso de Sucesso - TELA PRINCIPAL)
<img src="./img/Testes_imagem/CasoDeSucesso.PNG" width="300">

## Teste2 - Realizar Login  (Caso de Insucesso)
 Caso de Teste CT-02: | Realizar login para acesso e/ou criação de contas das instituições.| 
| --- | --- |
| Caso de insucesso - Criação do Cadastro (Restrições) |1. Ao inserir uma credencial de acesso já cadastrada o sistema deverá retornar uma mensagem de erro informando, “usuário já cadastrado”. 2. Ao inserir alguma informação inválida no formulário de cadastro, o sistema deverá informar que os dados informados são inválidos. 3. Ao deixar algum campo sem preenchimento no formulário de cadastro, o sistema não deverá permitir a continuidade do cadastro e exibir alerta, caso algum campo seja de preenchimento obrigatório.|
| Caso de insucesso Acesso às Contas (Restrições) |1. Ao inserir uma credencial não existente ou uma senha inválida o sistema deverá retornar uma mensagem de erro informando, “usuário ou senha inválidos”.  |
<img src="./img/Testes_imagem/Login.PNG" width="300">

### Usuário Não Logado - (CNPJ inválido) - Caso de Insucesso)
<img src="./img/Testes_imagem/CasoDeInsucessoErroNoCNPJ.PNG" width="300">

### Usuário Não Logado - (Senha inválida) - Caso de Insucesso)
<img src="./img/Testes_imagem/CasoDeInsucessoErroNaSenha.PNG" width="300">








