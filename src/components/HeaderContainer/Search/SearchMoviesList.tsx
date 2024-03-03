import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovieParams} from "../../../interfaces";
import {moviesService} from "../../../services";
import css from "../../MoviesContainer/MoviesList/MoviesList.module.css";
import MoviesListCard from "../../MoviesContainer/MoviesListCard/MoviesListCard";
import Pagination from "../../Pagination/Pagination";

const SearchMoviesList = () => {
    const [movies, setMovies] = useState<IMovieParams>({} as IMovieParams)
    const {results, page, total_pages} = movies
    const [query,] = useSearchParams({page:`1`})
    const searchParam: string = query.get("search")
    console.log(searchParam);

    const currentPage = +query.get('page');

    useEffect(() => {
        moviesService.getSearchMoviesByName(query.get('page'), searchParam).then(({data})=>setMovies(data))
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

export default SearchMoviesList;