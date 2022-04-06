import React from 'react';
import s from './DialogItem.module.css'
// import {NavLink} from 'react-router-dom';

type PropsType = {
    name: string
}

export const DialogItem = (props: PropsType) => {
    return (
        <div className={s.item}>
            <a href="" className={s.link}>{props.name}</a>
        </div>
    )
}