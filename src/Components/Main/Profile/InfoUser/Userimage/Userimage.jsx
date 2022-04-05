import React from "react";
import s from "./Userimage.module.css";
import Im from "../../../../Images/IMG_3192.JPG";

export const Userimage = () => {
    return (
        <div className={s.userimage}>
            <img src={Im} alt=""/>
        </div>
    )
}