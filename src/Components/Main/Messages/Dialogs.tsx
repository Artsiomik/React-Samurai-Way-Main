import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from './DialogItems/DialogItem';
import {DialogMessages} from './DialogMessages/DialogMessages';
import {DialogsPropsType} from './DialogsContainer';


export const Dialogs = (props: DialogsPropsType) => {

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