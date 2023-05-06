//@ts-ignore
import API from './webApiServices';
import { BASE_URL } from './urls';


export const getGasto = async (idCampanha) => {

    try {
        return await API.get(`${BASE_URL}api/CadastroCampanhas/${Object.values(idCampanha)}`).then(

            response => {
                console.log(response.data)
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );
    } catch (error) {
        return null;
    }
}


export const postGasto = async (param) => {
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

export const updateGasto = async (param) => {

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

export const deleteGasto = async (id) => {
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