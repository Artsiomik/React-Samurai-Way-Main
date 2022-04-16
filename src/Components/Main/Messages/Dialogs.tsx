import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItems/DialogItem';
import {DialogMessages} from './DialogMessages/DialogMessages';
import {NavLink} from 'react-router-dom';


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Kiril'},
        {id: 5, name: 'Gena'},
        {id: 6, name: 'Valera'},
    ]
    let dialogsItemElements = dialogsData.map((dialog)=> {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <p className={s.title}>Dialogs</p>
            <div className={s.content}>
                <div className={s.items}>
                    {dialogsItemElements}
                </div>
                <DialogMessages/>
            </div>
        </div>
    )
}