// package imports
import axios from 'axios';
import { AddTicketsFormValues } from '../app/forms/AddTicketsForm';

const getAsync = async (url: string) => {
    return axios.get(url);
};

const postAsync = async (URL: string, data: any) => {
    return axios.post(URL, data);
};

const putAsync = async (URL: string, data: any) => {
    return axios.put(URL, data);
};

export default { getAsync, postAsync, putAsync };
