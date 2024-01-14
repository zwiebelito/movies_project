import React from 'react';

import styles from './PosterPreview.module.css'
import {basePosterURL, picture} from "../../constants";

const PosterPreview = ({poster_path, title}) => {
    return (
        <div>
            <img className={styles.picture} src={poster_path ? `${basePosterURL}/${poster_path}` : `${picture}`} alt={`${title}`}/>
        </div>
    );
};

export {PosterPreview};