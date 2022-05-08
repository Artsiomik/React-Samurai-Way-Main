import React from "react";
import avatar from '../../../../Messages/DialogMessages/Message1/AvatarOwn/IMG_3192.jpg';
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