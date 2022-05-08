import React from "react";
import avatar from './companion.jpeg';
import style from './Avatar.module.css'

type PropsType = {
    text: string
}

export const Avatar = () => {
    return (
        <>
            <img className={style.avatar} src={avatar} alt=""/>
        </>
    )
}