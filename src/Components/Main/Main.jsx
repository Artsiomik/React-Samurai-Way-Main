import React from "react";
import s from './Main.module.css';
import {SideBar} from "./Sidebar/SideBar";
import {Profile} from "./Profile/Profile";

export const Main = () => {
    return (
        <main className={s.main}>
            <SideBar/>
            <Profile/>
        </main>
    )
}