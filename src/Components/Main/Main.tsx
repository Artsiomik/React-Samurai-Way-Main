import React from "react";
import s from './Main.module.css';
import {SideBar} from "./Sidebar/SideBar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from './Dialogs/Dialogs';

export const Main = () => {
    return (
        <main className={s.main}>
            <SideBar/>
            <section className={s.content}>
            {/*<Profile/>*/}
            <Dialogs/>
            </section>
        </main>
    )
}