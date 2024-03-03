import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import css from "../MoviesContainer/MoviesList/MoviesList.module.css";

interface IProps {
    page:number,
    total_pages:number,
    currentPage:number
}
const Pagination:FC<IProps> = ({page,total_pages, currentPage}) => {

    const [query, setQuery] = useSearchParams({page:'1'})

    const prev = () =>{
        setQuery(prev => {
            prev.set('page', (+query.get('page')-1).toString())
            return prev
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', (+query.get('page') + 1).toString())
            return prev
        })
    }
    return (
        <div>
            <div className={css.block_button}>
                <button disabled={currentPage<=1} onClick={prev}>PREV</button>
                <h3 className={css.page}>{page}</h3>
                <button disabled={currentPage>=total_pages} onClick={next}>NEXT</button>
            </div>
        </div>
    );
};

export default Pagination;