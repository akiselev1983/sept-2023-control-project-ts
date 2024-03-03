import React, {createContext, FC, PropsWithChildren, useState} from 'react';

import {ISetState} from "../types";

export interface IContext{
    trigger:boolean,
    setTrigger:ISetState<boolean>
}
const Context = createContext<IContext | undefined>(undefined)
interface IProps extends PropsWithChildren{

}
const ContextProvider:FC<IProps> = ({children}) => {


    const [trigger, setTrigger] = useState(false)


    return (
        <div>
            <Context.Provider value={{setTrigger, trigger}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {ContextProvider, Context};