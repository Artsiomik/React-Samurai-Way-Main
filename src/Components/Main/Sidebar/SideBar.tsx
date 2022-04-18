import React from "react";
import Profile from "../../Images/Profile1.png";
import Messages from '../../Images/messages1.jpg';
import News from '../../Images/news1.jpg';
import Music from '../../Images/music1.jpg';
import Settings from '../../Images/settings1.jpg';
import style from './SideBar.module.css'
import {SideBarItem} from "./SidebarItem/SideBarItem";

export const SideBar = () => {
    return (
        <aside className={style.sidebar}>
            <nav className={style.menu}>
                <ul className={style.list}>
                    <SideBarItem link={'Profile'} picture={Profile}/>
                    <SideBarItem link={'Messages'} picture={Messages}/>
                    <SideBarItem link={'News'} picture={News}/>
                    <SideBarItem link={'Music'} picture={Music}/>
                    <SideBarItem link={'Settings'} picture={Settings}/>
                </ul>
            </nav>
        </aside>
    )
}