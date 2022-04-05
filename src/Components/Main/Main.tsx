import React from 'react';
import s from './Main.module.css';
import {SideBar} from './Sidebar/SideBar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Messages/Dialogs';
import {News} from './News/News';
import {Music} from './Music/Music';
import {Settings} from './Settings/Settings';
import {Route} from 'react-router-dom';

export const Main = () => {
    return (
        <main className={s.main}>
            <SideBar/>
            <section className={s.content}>
                <Route path='/Profile' component={Profile}/>
                <Route path='/Messages' component={Dialogs}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
            </section>
        </main>

    )
}