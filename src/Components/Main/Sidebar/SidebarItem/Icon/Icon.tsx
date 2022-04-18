import React from "react";
import style from './Icon.module.css'

type PropsType = {
    picture: string
}

export const Icon = (props:PropsType) => {
    return (
        <>
            <img className={style.icon} src={props.picture} alt=""/>
        </>
    )
}