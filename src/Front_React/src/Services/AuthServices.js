// @ts-ignore
import API from './webApiServices';
import { BASE_URL } from './urls';


// export const register = async (param) => {
//     try {
//         return await API.post(`${BASE_URL}/register`, param).then(
//             response => {
//                 return response.data;
//             },
//             error => {
//                 console.log(error);
//                 return null;
//             }
//         );
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }


// export const login = async (param) => {

//     console.log("dentro do login", param)
//     console.log(`${BASE_URL}api/cadastro/entrar`)
//     try {
//         return await API.post(`${BASE_URL}api/Cadastro/entrar`, param).then(
//             response => {
//                 console.log(response.data)
//                 return response.data;
//             },
//             error => {

//                 console.log("deu erro", error);
//                 return null;
//             }
//         );
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }

export const testeLogin = async (cnpj, senha) => {

    const form = document.createElement('form');
    form.action = `${BASE_URL}api/cadastro/entrar`;
    form.method = 'POST';
    const cnpjInput = document.createElement('input');
    cnpjInput.type = 'text';
    cnpjInput.name = 'cnpj';
    cnpjInput.value = cnpj;
    form.appendChild(cnpjInput);
    const senhaInput = document.createElement('input');
    senhaInput.type = 'password';
    senhaInput.name = 'senha';
    senhaInput.value = senha;
    form.appendChild(senhaInput);
    const data = new FormData(form);
    const options = { method: 'POST', body: data };

    try {
        const response = await fetch(`${BASE_URL}api/cadastro/entrar`, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}


