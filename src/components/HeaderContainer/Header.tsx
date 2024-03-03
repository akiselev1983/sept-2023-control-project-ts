import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import css from './Header.module.css'
import Search from "./Search/Search";
import Switcher from "./Switch/Switcher";
import UserInfo from "../UserInfo/UserInfo";
import {useAppContext} from "../../hooks";


interface IProps {

}
const Header:FC<IProps> = () => {
    const navigate = useNavigate()

    const {trigger,setTrigger} = useAppContext()
    const handleButtonClick = () => {
        setTrigger(!trigger)
    };

    console.log(trigger);
    return (
        <div className={css.Header}>
            <div className={css.blockTitle}>
                <h1>THE MOVIES DATABASE</h1>
            </div>
            <div className={css.blockMenu}>
                <div className={css.flex}>
                    <button className={css.btn} onClick={()=>navigate('')}>MAIN</button>
                    <button className={css.btn} onClick={handleButtonClick}>GENRES</button>
                </div>
                <div className={css.flex}>
                    <Search/>
                    <Switcher/>
                    <UserInfo/>
                </div>
            </div>
        </div>
    )
};

export default Header;