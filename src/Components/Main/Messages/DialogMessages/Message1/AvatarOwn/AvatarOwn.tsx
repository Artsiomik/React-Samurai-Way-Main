import React from "react";
import avatar from '../../../../../Images/IMG_3192.jpg';
import s from './AvatarOwn.module.css'

type PropsType = {
    text: string
}

export const AvatarOwn = () => {
    return (
        <>
            <img className={s.avatar} src={avatar} alt=""/>
        </>
    )
}