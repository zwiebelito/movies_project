import React from 'react';

import styles from './AllInfo.module.css'
import {StarsRating} from "../../StarsRating/StarsRating";
import {GenreBadge} from "../../GenreBadge/GenreBadge";
import {basePosterURL, picture} from "../../../constants";

const AllInfo = ({movie}) => {
    const {budget, genres, original_title, overview,
        poster_path, release_date, runtime, title, vote_average} = movie;
    const date = new Date(release_date).getFullYear()

    return (
        <div className={styles.wrapper}>
            <div className={styles.general}>
                <img src={poster_path ? `${basePosterURL}/${poster_path}` : `${picture}`} alt={title}/>
                <p>{overview}</p>
            </div>
            <div className={styles.add}>
                <p className={styles.title}>{title}</p>
                <p className={styles.or_title}>Original name: {original_title}</p>
                <div className={styles.genres}>{genres && genres.map(genre => <GenreBadge genre={genre} key={genre.id}/>)}</div>
                <p className={styles.budget}>Budget: {budget === 0 ? 'no info' : `$${budget}`}</p>
                <p className={styles.release}>Release: {date}</p>
                <p className={styles.time}>Duration: {runtime} min.</p>
                <div className={styles.rating}>Overall rating: {vote_average && <StarsRating vote_average={vote_average}/>}</div>
            </div>
        </div>
    );
};

export {AllInfo};