import {apiService} from "./apiService";

import {urls} from "../constants";


const genresService = {
    getAll: () => apiService.get(urls.genres)
}

export {
    genresService
}