import React from "react";
import './Button.module.css'
import style from "./Button.module.css";

export const Button = () => {
    return (
            <div className={style.button}>
                <button className={style.send}>Send</button>
            </div>

    )
}