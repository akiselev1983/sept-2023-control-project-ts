import React, {FC, useState} from 'react';
import Switch from "react-switch";

import css from './Switcher.module.css'
export interface IProps{

}
const Switcher:FC<IProps> = () => {

    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = (nextChecked:boolean):void => {
        setChecked(nextChecked)
        switch (nextChecked) {
            case true:
                document.body.style.backgroundColor = 'snow';
                break;
            case false:
                document.body.style.backgroundColor = '#312f2f';
                break;
            default:
                break;
        }

    };

    return (
        <div className={css.switch}>
            <label>
                <Switch
                    onChange={handleChange}
                    checked={checked}
                    className="react-switch"
                />
            </label>

        </div>
    );
};

export default Switcher;