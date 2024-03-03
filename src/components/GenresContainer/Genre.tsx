import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Genre.module.css'

interface IProps{
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {

    const {id, name} = genre

    const navigate = useNavigate()

    return (
        <div className={css.block_genre} onClick={()=>navigate(`/movies/genre/${id}`, {state:{name}})}>
            {name}
        </div>
    );
};

export default Genre;