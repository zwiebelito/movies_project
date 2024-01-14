import React from 'react';

import styles from './GenreBadge.module.css'
import {useNavigate} from "react-router-dom";

const GenreBadge = ({genre}) => {
    const navigate = useNavigate()
    const {name, id} = genre;
    return (
        <>
            <span onClick={()=> navigate(`/genres/${id}`)} className={styles.genre}>{name.toLowerCase().concat(' ')}</span>
        </>
    );
};

export {GenreBadge};