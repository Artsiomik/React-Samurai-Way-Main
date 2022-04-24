import React from 'react';
import style from './Main.module.css';
import {SideBar} from './Sidebar/SideBar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Messages/Dialogs';
import {News} from './News/News';
import {Music} from './Music/Music';
import {Settings} from './Settings/Settings';
import {Route} from 'react-router-dom';
import {messageDataType} from './Messages/DialogMessages/DialogMessages';
import {addPost} from '../../Redux/State';

type MainType = {
    postsData: Array<MainPostArray>
    dialogsData: Array<MainDialogsArray>
    dialogMessages: Array<messageDataType>
    addPost: (postMessage: string)=> void
}

type MainPostArray = {
    id: number
    post: string
    count: number
}
type MainDialogsArray = {
    id: number
    name: string
}


export const Main = (props: MainType) => {

    return (
        <main className={style.main}>
            <SideBar/>
            <section className={style.content}>
                <Route path="/Profile" render={() => <Profile addPost={addPost}
                                                              postsData={props.postsData}/>}/>
                <Route path="/Messages" render={() => <Dialogs dialogsData={props.dialogsData}
                                                               dialogMessages={props.dialogMessages}/>}/>
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
            </section>
        </main>

    )
}