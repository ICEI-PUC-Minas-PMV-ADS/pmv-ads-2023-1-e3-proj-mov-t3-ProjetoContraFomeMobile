//@ts-ignore
import API from './webApiServices';
import { BASE_URL } from './urls';

export const getGasto = async (param) => {
    try {
        return await API.get(`${BASE_URL}/660/gastos`).then(
            response => {
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
    try {
        return await API.post(`${BASE_URL}/660/gastos`, param).then(
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
        return await API.put(`${BASE_URL}/660/gastos/${param.id}`, param).then(
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
    try {
        return await API.delete(`${BASE_URL}/660/gastos/${id}`).then(
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