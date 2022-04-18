import React from "react";
import style from './Text.module.css'

type PropsType = {
    message: string
}

export const Text = (props:PropsType) => {
    return (
        <>
            <div className={style.text}>{props.message}</div>
        </>
    )
}