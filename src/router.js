import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {GenresPage, HomePage, MovieDetailsPage, MoviesPage, NotFoundPage, SearchPage} from "./pages";
import {MoviesByGenre} from "./components";



const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'/home'}/>
            },
            {
                path: '/home',
                element: <HomePage/>
            },
            {
                path: '/movies',
                element: <MoviesPage/>
            },
            {
                path: '/search',
                element: <SearchPage />
            },
            {
                path: 'movies/:movieId',
                element: <MovieDetailsPage />
            },
            {
                path: '/genres',
                element: <GenresPage />
            },
            {
                path: 'genres/:genreId',
                element: <MoviesByGenre />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

export {router};