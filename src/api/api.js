const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://prof.world/api',
    timeout: 1000,
});

export async function getData() {
    return await instance.get('/test_json_files/?token=6a06cc0050374e32be51125978904bd8');
}