import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import styles from './Genres.module.css'
import {genresActions} from "../../redux";
import {Genre} from "./Genre/Genre";

const Genres = () => {
    const {genres} = useSelector(state => state.genres)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(genresActions.getAll())
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
            </div>
        </div>
    );
};

export {Genres};