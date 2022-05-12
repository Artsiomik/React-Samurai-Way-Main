import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from './DialogItems/DialogItem';
import {DialogMessages, messageDataType} from './DialogMessages/DialogMessages';
import {ActionTypes} from '../../../Redux/ReduxStore';

type PropsType = {
    dialogsData: Array<DialogsDataArray>
    dialogMessages: Array<messageDataType>
    dispatch: (action: ActionTypes) => void
    newMessageText: string
    sendMessage: () => void
    onMessageChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void

}

type DialogsDataArray = {
    id: number
    name: string
}

export const Dialogs = (props: PropsType) => {

    let dialogsItemElements = props.dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })

    const sendMessageOnClickHandler = () => {
        props.sendMessage()
        // props.UpdateNewMessageText()
    }
    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChangeHandler(e)
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
            <textarea className={style.textarea}
                      onChange={onMessageChangeHandler}
                      value={props.newMessageText}
                      placeholder={'my message...'}/>
            </form>
            <div className={style.button}>
                <button onClick={sendMessageOnClickHandler}
                        className={style.send}>Send
                </button>
            </div>
        </div>
    )
}