import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/HeaderContainer/Header";
import css from './MainLayout.module.css'
import GenresList from "../components/GenresContainer/GenresList";
import {useAppContext} from "../hooks";


interface IProps {
    trigger: boolean
}
const MainLayout:FC<IProps> = () => {
    const {trigger} = useAppContext()
    // const theme:string|null = document.getElementById('main').getAttribute('theme')

    return (
        <div id="main" className={css.MainLayout}>
                <Header/>
            {trigger&&<GenresList/>}
            <div className={css.block_main}>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;