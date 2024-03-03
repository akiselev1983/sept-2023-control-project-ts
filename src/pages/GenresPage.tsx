import React, {useEffect, useState} from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";

import {IMovieParams} from "../interfaces";
import {genresService} from "../services";
import css from "../components/MoviesContainer/MoviesList/MoviesList.module.css";
import MoviesListCard from "../components/MoviesContainer/MoviesListCard/MoviesListCard";
import Pagination from "../components/Pagination/Pagination";


const GenresPage = () => {
    const {state} = useLocation()
    const {id} = useParams()
    const [movies, setMovies] = useState<IMovieParams>({} as IMovieParams)
    const {results, page, total_pages} = movies
    const [query, ] = useSearchParams({page:'1'})
    const currentPage = +query.get('page');


    useEffect(() => {
        genresService.getAllByGenreId(+query.get('page')? +query.get('page'):1, +id).then(({data})=>setMovies(data))
    }, [id,query]);


    return (

        <div>
            <div className={css.title}>{state && <h1>{state.name}</h1>}</div>
            <div className={css.movies_list}>
                {results&&results.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)}
            </div>
                <Pagination page={page} total_pages={total_pages} currentPage={currentPage}/>
        </div>
    );
};

export default GenresPage;