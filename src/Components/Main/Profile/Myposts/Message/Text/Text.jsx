import React from "react";
import s from './Text.module.css'

export const Text = (props) => {
    return (
        <>
            <div className={s.text}>{props.message}</div>
        </>
    )
}