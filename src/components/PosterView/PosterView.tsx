import React, {FC} from 'react';

import {posterBaseUrl} from "../../constants";
import css from './PosterView.module.css'

interface IProps{
    poster_path:string,
    title:string
}
const PosterView:FC<IProps> = ({poster_path, title}) => {

    return (
        <div className={css.poster_view}>
            <img src={`${posterBaseUrl}${poster_path}`} alt={title}/>
        </div>
    );
};

export default PosterView;