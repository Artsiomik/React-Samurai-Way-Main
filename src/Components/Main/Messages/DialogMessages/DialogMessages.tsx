import React from 'react';
import style from './DialogMessages.module.css'
import {Message1} from './Message1/Message1';

 export type messageDataType = {
    id: number
    message: string
    author: 'own' | 'componion'
}

type DialogMessagesPropsType = {
    dialogMessages: Array<messageDataType>
}

export const DialogMessages = (props: DialogMessagesPropsType) => {


    let newMessage = props.dialogMessages.map((m) => {
        return <Message1 message={m.message} id={m.id} author={m.author}/>
    })

    return (
        <div className={style.elem}>
            {newMessage}
        </div>
    )
}