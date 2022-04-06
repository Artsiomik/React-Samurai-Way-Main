import React from "react";
import s from './Text.module.css'

type PropsType = {
    message: string
}

export const Text = (props:PropsType) => {
    return (
        <>
            <div className={s.text}>{props.message}</div>
        </>
    )
}