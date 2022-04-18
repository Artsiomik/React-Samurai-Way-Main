import React from "react";
import style from "./Userimage.module.css";
import Im from "../../../../Images/IMG_3192.jpg";

export const Userimage = () => {
    return (
        <div className={style.userimage}>
            <img src={Im} alt=""/>
        </div>
    )
}