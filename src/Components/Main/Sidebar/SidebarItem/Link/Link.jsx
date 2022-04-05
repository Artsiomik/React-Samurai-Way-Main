import React from "react";
import s from './Link.module.css'

export const Link = (props) => {
    return (
        <>
            <a href="#" className={s.link}>{props.link}</a>
        </>
    )
}