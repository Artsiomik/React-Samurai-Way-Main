import React from "react";
import heart from '../../../../../Images/heart.png';
import s from './LikeCount.module.css'

type PropsType = {
    like: number
}

export const Count = (props: PropsType) => {
    return (
        <>
            <img className={s.heart} src={heart} alt=""/>
            <span className={s.count}>{props.like}</span>
        </>
    )
}