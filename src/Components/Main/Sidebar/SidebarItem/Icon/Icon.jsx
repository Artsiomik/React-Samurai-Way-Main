import React from "react";
import s from './Icon.module.css'

export const Icon = (props) => {
    return (
        <>
            <img className={s.icon} src={props.picture} alt=""/>
        </>
    )
}