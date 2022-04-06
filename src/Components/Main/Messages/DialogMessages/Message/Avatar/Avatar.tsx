import React from "react";
import avatar from '../../../../../Images/IMG_3192.jpg';
import s from './Avatar.module.css'

type PropsType = {
    text: string
}

export const Avatar = () => {
    return (
        <>
            <img className={s.avatar} src={avatar} alt=""/>
        </>
    )
}