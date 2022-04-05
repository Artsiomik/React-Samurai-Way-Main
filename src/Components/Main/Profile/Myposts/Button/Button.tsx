import React from "react";
import './Button.module.css'
import s from "./Button.module.css";

export const Button = () => {
    return (
            <div className={s.button}>
                <button className={s.send}>Send</button>
            </div>

    )
}