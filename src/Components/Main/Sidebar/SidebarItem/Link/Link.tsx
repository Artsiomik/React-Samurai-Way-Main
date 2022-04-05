import React from "react";
import s from './Link.module.css'

type PropsType = {
    link: string
}

export const Link = (props:PropsType) => {
    return (
        <>
            <a href={props.link} className={s.link}>{props.link}</a>
        </>
    )
}