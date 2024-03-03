import React from 'react';

import css from "../HeaderContainer/Header.module.css";
import avatar from "../../images/avatar.png";

const UserInfo = () => {

    return (
        <div>
            <div className={css.block_user}>
                <img src={avatar} alt={avatar}/>
                <p>User</p>
            </div>
        </div>
    );
};

export default UserInfo;