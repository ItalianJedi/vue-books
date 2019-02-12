// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    // TODO: Figure out if I really need an APPID
    config.params.APPID = 'AIzaSyDy0BTNGNSUteQAjcO2g4-VIXVZQpsHmEA';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});