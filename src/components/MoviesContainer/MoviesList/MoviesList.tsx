import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {moviesService} from "../../../services";
import {IMovieParams} from "../../../interfaces";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'
import Pagination from "../../Pagination/Pagination";



interface IProps {

}

const MoviesList:FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovieParams>({} as IMovieParams)
    const {results, page, total_pages} = movies
    const [query,] = useSearchParams({page:`1`})

    const currentPage = +query.get('page');

    useEffect(() => {
        moviesService.getAllMovies(query.get('page')).then(({data})=>setMovies(data))
    }, [query]);

    return (
        <div>
        <div className={css.movies_list}>
            {results&&results.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)}
        </div>
            <Pagination page={page} total_pages={total_pages} currentPage={currentPage}/>
        </div>
    );
};

export default MoviesList;