import React from "react";
import s from './Icon.module.css'

type PropsType = {
    picture: string
}

export const Icon = (props:PropsType) => {
    return (
        <>
            <img className={s.icon} src={props.picture} alt=""/>
        </>
    )
}