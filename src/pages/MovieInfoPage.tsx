import React from 'react';
import {useParams} from "react-router-dom";

import MovieInfo from "../components/MoviesContainer/MovieInfo/MovieInfo";



const MovieInfoPage = () => {
    const {movieId} = useParams()
    return (
        <div>

            <MovieInfo id={movieId}/>
        </div>
    );
};

export default MovieInfoPage;