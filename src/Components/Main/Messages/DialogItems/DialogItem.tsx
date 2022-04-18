import React from 'react';
import style from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

type PropsType = {
    name: string
    id: number
}

export const DialogItem = (props: PropsType) => {
    return (
        <div className={style.item}>
            <NavLink to={'/Messages/' + props.name} className={style.link}>{props.name}</NavLink>
        </div>
    )
}