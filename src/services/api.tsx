import axios from 'axios';
import md5 from 'md5';

const ts = +new Date();
const apikey = process.env.REACT_APP_PUBLIC_KEY as string;
const privateKey = process.env.REACT_APP_PRIVATE_KEY as string;

const hash = md5(ts + privateKey + apikey);

const baseURL = 'http://gateway.marvel.com/v1/public';
const params = { ts, hash, apikey };

const api = axios.create({ baseURL, params });

export default api;
