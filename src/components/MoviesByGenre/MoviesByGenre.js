import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";


import {MovieListCard} from "../MoviesListCards/MovieListCard/MovieListCard";
import styles from './MoviesByGenre.module.css'
import {moviesActions} from "../../redux";


const MoviesByGenre = () => {
   const {genreId} = useParams();
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({with_genres:`${genreId}`, page: '1'});
    const page = +query.get('page');
    const with_genres = query.get('with_genres');

    useEffect(()=>{
        dispatch(moviesActions.getGenreID({with_genres, page}))
    },[genreId, page])

    const getBack = (page) => {
        setQuery(query=> ({page: page-1}))
        window.scroll(0, 0)
    }

    const getNext = (page) => {
        setQuery(query=> ({page: page+1}))
        window.scroll(0, 0)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {movies?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={styles.buttons}>
                <Button variant='contained' disabled = {page<=1} onClick={()=> getBack(page)}>Previous</Button>
                <Button variant='contained' disabled = {page>=500} onClick={()=> getNext(page)}>Next</Button>
            </div>
        </div>
    );
};

export {MoviesByGenre};