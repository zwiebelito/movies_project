import {apiService} from "./apiService";

import {urls} from "../constants";


const moviesService = {
    getAll: (page) => apiService.get(urls.movies.base, {params: {page}}),
    getById: (id) => apiService.get(urls.movie.byId(id)),
    getGenreID: (id, page) => apiService.get(urls.movies.base,{params: {page, with_genres:`${id}`}}),
    getSearch: (keyword, page) => apiService.get(urls.search, {params: {query: `${keyword}`, page}}),
    getTopRated: () => apiService.get(urls.topRated)
}

export {
    moviesService
}