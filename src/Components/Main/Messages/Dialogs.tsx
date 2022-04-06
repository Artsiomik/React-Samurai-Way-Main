import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItems/DialogItem';
import {DialogMessages} from './DialogMessages/DialogMessages';
import {NavLink} from 'react-router-dom';


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <p className={s.title}>Dialogs</p>
            <div className={s.content}>
                <div className={s.items}>
                    <DialogItem name={'Dimych'}/>
                    <DialogItem name={'Andrey'}/>
                    <DialogItem name={'Sveta'}/>
                    <DialogItem name={'Kiril'}/>
                    <DialogItem name={'Gena'}/>
                    <DialogItem name={'Valera'}/>
                </div>
                <DialogMessages/>
            </div>
        </div>
    )
}