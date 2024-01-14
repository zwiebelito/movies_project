import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {progressReducer} from "./slices/progressSlice";
import {genresReducer} from "./slices/genresSlice";
import {topReducer} from "./slices/topRatedSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        progress: progressReducer,
        genres: genresReducer,
        topRatedMovies: topReducer
    }
})

export {
    store
}