import React from "react";
import style from './Link.module.css'
import {NavLink} from 'react-router-dom'

type PropsType = {
    link: string
}

export const Link = (props:PropsType) => {
    console.log(props.link,'link')
    return (
        <>
            <NavLink to={'/'+props.link} className={style.link}>{props.link}</NavLink>
        </>
    )
}