import React, {useRef} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from './DialogItems/DialogItem';
import {DialogMessages, messageDataType} from './DialogMessages/DialogMessages';

type DialogsDataType = {
    dialogsData: Array<DialogsDataArray>
    dialogMessages: Array<messageDataType>
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

    const addMessagetRef = useRef<HTMLTextAreaElement | null>(null)

    const addMessage = () => {
        if (addMessagetRef.current) alert(addMessagetRef.current.value)
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
            <textarea className={style.textarea} ref={addMessagetRef} name="text"> my message...</textarea>
            </form>
            <div className={style.button}>
                <button onClick={addMessage} className={style.send}>Send</button>
            </div>
        </div>
    )
}