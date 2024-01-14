import React from 'react';

import {useTitle} from "../../hooks/useTitle";
import {MoviesListCards} from "../../components";

const MoviesPage = () => {
    useTitle('Movies')
    return (
        <>
        <div style={{width: 'calc(100vw - 50px)', margin: '15px', height: '100%'}}>
            <MoviesListCards />
        </div>
        </>
    );
};

export {MoviesPage};