import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './Genre.module.css'

const Genre = ({genre}) => {
    const {id, name} = genre;

    return (
        <div className={styles.wrapper}>
            <NavLink to={`${id}`}>{name}</NavLink>
        </div>
    );
};

export {Genre};