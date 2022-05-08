import React from "react";
import avatar from './IMG_3192.jpg';
import style from './AvatarOwn.module.css'

type PropsType = {
    text: string
}

export const AvatarOwn = () => {
    return (
        <>
            <img className={style.avatar} src={avatar} alt=""/>
        </>
    )
}