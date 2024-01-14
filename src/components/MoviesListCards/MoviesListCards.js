import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import React, {useEffect} from "react";
import {Button} from "@mui/material";


import styles from './MoviesListCards.module.css'
import {MovieListCard} from "./MovieListCard/MovieListCard";
import {moviesActions} from "../../redux";



const MoviesListCards = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies)
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = +query.get('page')


    useEffect(()=> {
        dispatch(moviesActions.getAll({page}))
    }, [page])

    const getBack = (page) => {
        setQuery(query=> ({page: page-1}))
        window.scroll(0, 0)
    }

    const getNext = (page) => {
        setQuery(query=> ({page: page+1}))
        window.scroll(0, 0)
    }

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={styles.buttons}>
                <Button variant='contained' disabled = {page<=1} onClick={()=> getBack(page)}>Previous</Button>
                <Button variant='contained' disabled = {page>=500} onClick = {()=> getNext(page)}>Next</Button>
            </div>
        </div>
    );
};

export {MoviesListCards};