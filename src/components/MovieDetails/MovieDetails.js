import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import {AllInfo} from "./AllInfo/AllInfo";
import {moviesActions} from "../../redux";


const MovieDetails = () => {
    const {movieId} = useParams()
    const {movie} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(moviesActions.getById(movieId))
    }, [movieId])
    return (
        <div>
            {movie && <AllInfo movie={movie} key={movie.id}/>}
        </div>
    )
};

export {MovieDetails};
