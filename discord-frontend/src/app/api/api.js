import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:5002/api';
axios.defaults.timeout = 1000;
axios.defaults.withCredentials = true;

const responseBody = response => response.data;
axios.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Barer ${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

const requests = {
    get: (url) => axios.get(url, {headers: {"Access-Control-Allow-Credentials": "true"}}).then(responseBody),
    post: (url, body) => axios.post(url, body, {headers: {"Access-Control-Allow-Credentials": "true"}}).then(responseBody),
    put: (url, body) => axios.put(url, body, {headers: {"Access-Control-Allow-Credentials": "true"}}).then(responseBody),
    delete: (url) => axios.delete(url, {headers: {"Access-Control-Allow-Credentials": "true"}}).then(responseBody)
};


const auth = {
    login: (data) => requests.post('/auth/login', data),
    register: (data) => requests.post('/auth/register', data)
}

export const agent = {
    auth

}

