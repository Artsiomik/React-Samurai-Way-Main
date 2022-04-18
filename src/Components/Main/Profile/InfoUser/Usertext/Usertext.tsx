import React from "react";
import style from "./Usertext.module.css";
import {Text} from "./Text/Text";

export const Usertext = () => {

    return (
        <div className={style.usertext}>
            <div className={style.username}>Artsiom Broslavsky</div>
            <Text text='Date of Birth: October, 15'/>
            <Text text='City: Minsk'/>
            <Text text='Education: BNTU (2012)'/>
            <a className={style.web} href="#">Web Site: https://github.com/Artsiomik</a>
        </div>
    )
}