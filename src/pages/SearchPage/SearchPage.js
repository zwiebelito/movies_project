import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {Button} from "@mui/material";

import {moviesActions} from "../../redux";
import styles from './SearchPage.module.css'
import {MovieListCard} from "../../components";


const SearchPage = () => {
    const {searchByName, total_pages} = useSelector(store => store.movies)
    const dispatch = useDispatch()
    const name = localStorage.getItem('name') || null;
    const [query, setQuery] = useSearchParams({query:`${name}`, page: '1'});
    const count = +query.get('page');
    const keyword = query.get('query');

    useEffect(() => {
        if (name) {
            dispatch(moviesActions.getSearch({page: count, name}));
        }
    }, [count, keyword, name, dispatch]);

    const getBack = (count) => {
        setQuery(query=> ({page: count-1}))
        window.scroll(0, 0)
    }

    const getNext = (count) => {
        setQuery(query=> ({page: count+1}))
        window.scroll(0, 0)
    }

    if (searchByName.length === 20){
        return (
            <div className={styles.main}>
                <h2>Results of "{name}" search:</h2>
                <div className={styles.wrapper}>
                    {searchByName && searchByName.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                </div>
                <div className={styles.buttons}>
                    <Button variant='contained' disabled = {count<=1} onClick={()=> getBack(count)}>Previous</Button>
                    <Button variant='contained' disabled = {count >= total_pages} onClick = {()=> getNext(count)}>Next</Button>
                </div>
            </div>
        )
    } else if (searchByName.length < 20 && searchByName.length > 0){
        return (
            <div className={styles.main}>
                <h2>Results of "{name}" search:</h2>
                <div className={styles.wrapper}>
                    {searchByName && searchByName.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                </div>
                <div className={styles.buttons}>
                    <Button variant='contained' disabled = {count<=1} onClick={()=> getBack(count)}>Previous</Button>
                    <Button variant='contained' disabled = {count >= total_pages} onClick = {()=> getNext(count)}>Next</Button>
                </div>
            </div>
        )
    } else if (searchByName.length === 0){
        return (
            <div className={styles.nothing}>
                <h2 style={{marginTop: '350px'}}>Nothing has been found at your request "{name}"</h2>
            </div>
        )
    }
};

export {SearchPage};