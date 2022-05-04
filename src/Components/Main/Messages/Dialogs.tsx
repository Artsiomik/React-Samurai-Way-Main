import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from './DialogItems/DialogItem';
import {DialogMessages, messageDataType} from './DialogMessages/DialogMessages';
import {ActionTypes, onMessageChangeHandlerAC, sendMessageAC, UpdateNewMessageTextAC} from '../../../Redux/State';

type DialogsDataType = {
    dialogsData: Array<DialogsDataArray>
    dialogMessages: Array<messageDataType>
    dispatch: (action: ActionTypes) => void
    newMessageText: string
}

type DialogsDataArray = {
    id: number
    name: string
}

export const Dialogs = (props: DialogsDataType) => {

    let dialogsItemElements = props.dialogsData.map((dialog)=> {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })

    const sendMessage = () => {
        props.dispatch(sendMessageAC())
        props.dispatch(UpdateNewMessageTextAC())
    }
    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onMessageChangeHandlerAC(e))
    }

    return (
        <div className={style.dialogs}>
            <p className={style.title}>Dialogs</p>
            <div className={style.content}>
                <div className={style.items}>
                    {dialogsItemElements}
                </div>
                <DialogMessages dialogMessages={props.dialogMessages}/>
            </div>
            <form className={style.form}>
            <textarea className={style.textarea} onChange={onMessageChangeHandler} value={props.newMessageText} name="text"> my message...</textarea>
            </form>
            <div className={style.button}>
                <button onClick={sendMessage} className={style.send}>Send</button>
            </div>
        </div>
    )
}