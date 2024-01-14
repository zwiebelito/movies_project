import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import styles from './MovieListCard.module.css'
import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {genresActions} from "../../../redux";

const MovieListCard = ({movie}) => {
    const {genres} = useSelector(state => state.genres)
    const dispatch = useDispatch()
    const{id, title, vote_average, poster_path, genre_ids, release_date} = movie;
    const data = new Date(release_date).getFullYear()

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movies/${id}`);
    }

    useEffect(()=> {
        dispatch(genresActions.getAll())
    }, [])

    const filteredGenres = genres.filter(genre => genre_ids.includes(genre.id))
    filteredGenres.length = 3;

    return (
        <div className={styles.wrapper} onClick={handleClick}>
           <div className={styles.titleHeight}>
               <h2>{title}</h2>
           </div>
            <PosterPreview title={title} poster_path={poster_path}/>
            <div className={styles.data}>Release date: {release_date === '' ? 'no info' : data}</div>
            <div className={styles.genres}>
                {
                   filteredGenres.map((genre) => <p key={genre.id}>{genre.name}</p>)
                }
            </div>
                <div className={[styles.rating, vote_average > 7 ? styles.good: styles.bad].join(' ')}>
                    {Math.round(vote_average)}
                </div>
        </div>
    );
};

export {MovieListCard};

