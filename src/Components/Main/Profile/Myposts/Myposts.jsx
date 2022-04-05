import React from "react";
import s from './Myposts.module.css';
import {Textarea} from "./Textarea/Textarea";
import {Button} from "./Button/Button";
import {Message} from "./Message/Message";

export const Myposts = () => {
    return (
        <div className={s.myposts}>
            <div className={s.title}>My posts</div>
            <Textarea/>
            <Button/>
            <div className={s.mypostsout}>
                <Message text={'Hey, why nobody love me?'}/>
                <Message text={'It is our new program! Hey!'}/>
                <Message text={'Life is good! And live well!'}/>
            </div>
        </div>
    )
}