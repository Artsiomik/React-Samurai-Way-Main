import React from 'react';
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

    return (
        <div className={style.dialogs}>
            <p className={style.title}>Dialogs</p>
            <div className={style.content}>
                <div className={style.items}>
                    {dialogsItemElements}
                </div>
                <DialogMessages dialogMessages={props.dialogMessages}/>
            </div>
        </div>
    )
}