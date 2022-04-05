import React from "react";
import avatar from '../../../../../Images/IMG_3192.JPG';
import s from './Avatar.module.css'

export const Avatar = (props) => {
    return (
        <>
            <img className={s.avatar} src={avatar} alt=""/>
        </>
    )
}