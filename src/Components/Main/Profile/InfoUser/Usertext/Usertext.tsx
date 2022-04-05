import React from "react";
import s from "./Usertext.module.css";
import {Text} from "./Text/Text";

export const Usertext = () => {
    return (
        <div className={s.usertext}>
            <div className={s.username}>Artsiom Broslavsky</div>
            <Text text='Date of Birth: October, 15'/>
            <Text text='City: Minsk'/>
            <Text text='Education: BNTU (2012)'/>
            <a className={s.web} href="#">Web Site: https://github.com/Artsiomik</a>
        </div>
    )
}