import React from "react";
import style from "./Message1.module.css";
import {Avatar} from "./Avatar/Avatar";
import {Arrow} from "./Arrow/Arrow";
import {Text} from "./Text/Text";
import {messageDataType} from '../DialogMessages';
import {AvatarOwn} from './AvatarOwn/AvatarOwn';


export const Message1 = (props:messageDataType) => {
    const containerStyle = props.author === 'componion' ? style.messagesComponion : style.messages
    return (
        <div className={containerStyle}>
            {props.author === 'componion' && <div className={style.friend}>Dimych</div>}
            {props.author === 'componion' && <Avatar/>}
            {props.author === 'own' &&<AvatarOwn/>}
            <Arrow/>
            <Text message={props.message}/>
        </div>
    )
}