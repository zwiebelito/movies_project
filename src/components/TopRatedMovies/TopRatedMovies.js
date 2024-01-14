import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import {MovieListCard} from "../MoviesListCards/MovieListCard/MovieListCard";
import {topActions} from "../../redux";


const TopRatedMovies = () => {
    const {topRatedMovies} = useSelector(state => state.topRatedMovies)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(topActions.getTopRated())
    }, [dispatch])

    return (
        <div style={{margin: '170px 0 10px 0', height: "fit-content"}}>
            <h1 style={{margin: '10px 0 10px 15px', color: '#fa3489', fontFamily: 'ABeeZee-Regular'}}>Top Rated</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={4}
                navigation
            >
                {topRatedMovies.map(movie => (
                    <SwiperSlide style={{margin: '55px'}} key={movie.id}><MovieListCard movie={movie}/></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export {TopRatedMovies};