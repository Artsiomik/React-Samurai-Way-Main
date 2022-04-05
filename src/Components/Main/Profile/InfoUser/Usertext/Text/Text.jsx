import React from "react";
import s from "./Text.module.css";


export const Text = (props) => {
    return (
       <>
           <p className={s.text}>{props.text}</p>
       </>
    )
}