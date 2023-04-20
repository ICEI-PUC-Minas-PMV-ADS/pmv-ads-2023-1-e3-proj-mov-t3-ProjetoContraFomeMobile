import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeIconAPI } from '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set';
import { useUser } from '../contexts/UseContext';
const onRequest = async (config) => {
    const token = await AsyncStorage.getItem('@TOKEN_KEY');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}

const setupInterceptorsTo = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest);
    return axiosInstance;
}

const API = axios.create();
setupInterceptorsTo(API);
export default API;

