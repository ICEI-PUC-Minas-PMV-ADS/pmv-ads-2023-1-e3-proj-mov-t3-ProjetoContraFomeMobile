//@ts-ignore
import API from './webApiServices';
import { BASE_URL } from './urls';

export const postCamp = async (param) => {
    console.log(param)
    try {
        return await API.post(`${BASE_URL}api/CadastroCampanhas`, param).then(
            response => {
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const updateCamp = async (param) => {

    try {
        return await API.put(`${BASE_URL}api/CadastroCampanhas/${param.idCampanha}`, param).then(
            response => {
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const deleteCamp = async (id) => {
    console.log(id)
    try {
        return await API.delete(`${BASE_URL}api/CadastroCampanhas/${id}`).then(
            response => {
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}