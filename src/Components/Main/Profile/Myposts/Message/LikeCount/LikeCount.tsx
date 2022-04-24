import React from "react";
import heart from '../../../../../Images/heart.png';
import style from './LikeCount.module.css'

type PropsType = {
    like: number
}

export const LikeCount = (props: PropsType) => {
    return (
        <>
            <img className={style.heart} src={heart} alt=""/>
            <span className={style.count}>{props.like}</span>
        </>
    )
}