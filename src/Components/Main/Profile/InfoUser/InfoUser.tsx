import React from "react";
import {Userimage} from "./Userimage/Userimage";
import style from './InfoUser.module.css';
import {Usertext} from "./Usertext/Usertext";

export const InfoUser = () => {
    return (
        <div className={style.infouser}>
            <Userimage/>
            <Usertext/>
        </div>

    )
}