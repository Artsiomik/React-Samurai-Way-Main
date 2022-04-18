import React from "react";
import style from "./Text.module.css";

type propsType = {
    text:string
}


export const Text = (props:propsType) => {
    return (
       <>
           <p className={style.text}>{props.text}</p>
       </>
    )
}