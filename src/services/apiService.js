import axios from "axios";

import {baseURL, token} from "../constants";


const apiService = axios.create({
    baseURL,
    headers:{
        accept: 'application/json',
        Authorization: token
    }
})

export {apiService}