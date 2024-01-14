import React from 'react';

import {useTitle} from "../../hooks/useTitle";
import {Genres} from "../../components";

const GenresPage = () => {
    useTitle('Genres')
    return (
        <>
            <div style={{width: 'calc(100vw - 50px)', margin: '15px'}}>
                <Genres />
            </div>
        </>
    );
};

export {GenresPage};