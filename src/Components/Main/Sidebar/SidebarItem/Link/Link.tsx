import React from "react";
import s from './Link.module.css'
import {NavLink} from 'react-router-dom'

type PropsType = {
    link: string
}

export const Link = (props:PropsType) => {
    return (
        <>
            <NavLink to={props.link} className={s.link}>{props.link}</NavLink>
        </>
    )
}