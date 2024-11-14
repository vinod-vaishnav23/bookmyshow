import axios from 'axios';

// @TODO: Move all the config parameters in 1 file it could be a .env
const API_BASE_URL = 'http://localhost:5500/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 3000,
    headers: {}
    //@TODO: see possiblity if auth token can be sent in header here
});

export default apiClient;

