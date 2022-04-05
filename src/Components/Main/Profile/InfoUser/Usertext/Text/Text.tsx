import React from "react";
import s from "./Text.module.css";

type propsType = {
    text:string
}


export const Text = (props:propsType) => {
    return (
       <>
           <p className={s.text}>{props.text}</p>
       </>
    )
}