import React from "react";
import s from "./Message1.module.css";
import {Avatar} from "./Avatar/Avatar";
import {Arrow} from "./Arrow/Arrow";
import {Text} from "./Text/Text";

type PropsType = {
    text: string
}

export const Message1 = (props:PropsType) => {
    return (
        <div className={s.messages}>
            <div className={s.friend}>Dimych</div>
            <Avatar/>
            <Arrow/>
            <Text message={props.text}/>
        </div>
    )
}