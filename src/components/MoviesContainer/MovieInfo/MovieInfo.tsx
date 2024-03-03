import React, {FC, useEffect, useState} from 'react';

import {StarRating} from 'star-rating-react-ts'
import {IMovieInfo} from "../../../interfaces";
import {moviesService} from "../../../services";
import PosterView from "../../PosterView/PosterView";
import css from './MovieInfo.module.css'
import {Link} from "react-router-dom";


interface IProps {
    id:string,


}
const MovieInfo:FC<IProps> = ({id}) => {

    const [movie, setMovie] = useState<IMovieInfo>(null)


    useEffect(() => {
        moviesService.getMovieById(+id).then(({data})=>{
            setMovie(data)

        })

    }, [id]);

    if (!movie) return;
    console.log(movie);
    const {title,poster_path, overview, vote_average, runtime, release_date, genres} = movie
    return (
        <div className={css.main}>
            <div className={css.title}>
                <h1>{title}</h1>
            </div>
            <div className={css.flex}>
                <div className={css.poster}>
                    <PosterView poster_path={poster_path} title={title}/>
                </div>
                <div className={css.info}>
                    <StarRating numStars={10} initialRating={vote_average} readOnly={false} />
                    <div className={css.block_link}>
                        <h2>Genre: </h2>
                        {genres.map(genre=> <div><Link to={`/movies/genre/${genre.id}`}>{genre.name}</Link></div>)}
                    </div>
                    <h2>Runtime: {runtime}min</h2>
                    <h2>Release date: {release_date}</h2>
                    <div className={css.overview}>
                        <h1>OVERVIEW</h1>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;