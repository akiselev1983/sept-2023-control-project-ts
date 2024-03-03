import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {StarRating} from "star-rating-react-ts";

import {IMovie} from "../../../interfaces";
import PosterView from "../../PosterView/PosterView";
import css from './MovieListCard.module.css'


interface IProps{
    movie:IMovie
}

const MoviesListCard:FC<IProps> = ({movie}) => {

    const navigate = useNavigate()

    const {
        poster_path, id, title, release_date, vote_average} = movie
    return (
        <div className={css.movie_list_card} onClick={()=>navigate(`/movies/${id}`)}>
            <div className={css.image}>
                <PosterView poster_path={poster_path} title={title}/>
            </div>
            <StarRating theme={{size:20}} numStars={10} initialRating={vote_average} readOnly={false}/>

            <div className={css.title}>{title} ({new Date(release_date).getFullYear()})</div>

        </div>
    );
};

export default MoviesListCard;