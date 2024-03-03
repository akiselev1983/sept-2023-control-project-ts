import React, {useEffect, useState} from 'react';

import {IGenre} from "../../interfaces";
import {genresService} from "../../services";
import Genre from "./Genre";
import css from './Genre.module.css'


const GenresList = () => {

    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        genresService.getAllGenres().then(({data:{genres}})=>setGenres(genres))
    }, []);

console.log(genres)
    return (
        <div>
            <div className={css.block_genres}>{genres.map(genre => <Genre key={genre.id} genre={genre}/>)}</div>

    </div>

    );
};

export default GenresList;