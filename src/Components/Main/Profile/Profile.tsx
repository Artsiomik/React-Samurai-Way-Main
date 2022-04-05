import React from "react";
import s from './Profile.module.css';
import {InfoUser} from "./InfoUser/InfoUser";
import {Myposts} from "./Myposts/Myposts";

export const Profile = () => {
    return (
        <section className={s.content}>
            <InfoUser/>
            <Myposts/>
        </section>
    )
}