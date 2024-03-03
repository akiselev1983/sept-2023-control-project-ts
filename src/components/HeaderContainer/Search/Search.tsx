import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import image from '../../../images/icons8-magnify-32.png'
import css from './Search.module.css'

const Search = () => {
    const navigate = useNavigate();
    const {register, handleSubmit,reset} = useForm();

    const handleSearch:SubmitHandler<any>=({search})=>{
        console.log(search)
        if(search.trim().length>0){
            navigate(`/search/movies?search=${search}`)
            reset()
        } else {
            navigate(`/movie`);
            reset();
        }
    }

    return (
        <div className={css.search}>
            <form onSubmit={handleSubmit(handleSearch)}>
                <img src={image} alt={'search'}/>
                <input type="text" name={"search"} placeholder={"search"} {...register('search')}/>
                <button>SEARCH</button>
            </form>
        </div>
    );
};

export default Search;