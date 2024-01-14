import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({vote_average}) => {
    const rating = vote_average / 2;
    return (
        <div style={{margin: '5px'}}>
            <StarRatings
                rating={rating}
                numberOfStars={5}
                starDimension="15px"
                starSpacing="10px"
                starRatedColor="#00C2FF"/>
        </div>
    );
};

export {StarsRating};