// @ts-ignore
import API from './webApiServices';
import { BASE_URL } from './urls';

export const verifica = async (CNPJ, Senha) => {
    console.log(CNPJ, Senha);
    try {
        const formData = new FormData()
        formData.append("cnpj", CNPJ)
        formData.append("senha", Senha)
        const rest = await API.post(`${BASE_URL}api/Cadastro/entrar2`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            transformRequest: (data) => { return data }
        })
        console.log(rest.data)
        return rest.data
    } catch (error) {
        console.log(error);
        return null;
    }
}



export const register = async (RazaoSocial, NomeFantasia, CNPJ, fundacao, Endereco, Cidade, Estado, CEP, Pais, Telefone, email, senha) => {
    console.log(fundacao, senha);
    try {
        const rest = await API.post(`${BASE_URL}api/Cadastro`, {
            RazaoSocial,
            NomeFantasia,
            CNPJ,
            fundacao,
            Endereco,
            Cidade,
            Estado,
            CEP,
            Pais,
            Telefone,
            email,
            senha

        });
        console.log(rest.data)
        return rest.data
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const login = async (CNPJ, Senha) => {

    try {
        const formData = new FormData()
        formData.append("cnpj", CNPJ)
        formData.append("senha", Senha)
        const rest = await API.post(`${BASE_URL}api/Cadastro/entrar`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            transformRequest: (data) => { return data }
        })
        console.log(rest.data)
        return rest.data
    } catch (error) {
        console.log(error);
        return null;
    }
}


export const Atualizar = async () => {
    try {
        const rest = await API.get(`${BASE_URL}api/CadastroCampanhas/`);
        return rest.data
    } catch (error) {
        console.log(error);
        return null;
    }
}


export const Doar = async (tipoDoacao, valor, idCampanha, cadastroCampanhaidCampanha) => {

    try {
        const rest = await API.post(`${BASE_URL}api/Doacao`, {
            tipoDoacao,
            valor,
            idCampanha,
            cadastroCampanhaidCampanha


        });
        console.log(rest.data)
        return rest.data
    } catch (error) {
        console.log(error);
        return null;
    }
}


export const Receber = async (id) => {


    try {
        const rest = await API.get(`${BASE_URL}api/Doacao/DoacaoPorCampanha/${id}`, {
        });
        return rest.data
    } catch (error) {
        console.log(error);
        return null;
    }
}


