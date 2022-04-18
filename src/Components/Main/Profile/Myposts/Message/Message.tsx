import React from "react";
import style from "./Message.module.css";
import {Avatar} from "./Avatar/Avatar";
import {Arrow} from "./Arrow/Arrow";
import {Text} from "./Text/Text";
import {Count} from './LikeCount/LikeCount';

type PropsType = {
    text: string
    id: number
    likeCount: number
}

export const Message = (props:PropsType) => {

    return (
        <div className={style.messages}>
            <Avatar/>
            <Arrow/>
            <Text message={props.text}/>
            <Count like={props.likeCount}/>
        </div>
    )
}