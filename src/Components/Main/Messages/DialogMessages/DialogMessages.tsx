import React from 'react';
import s from './DialogMessages.module.css'
import {Message} from './Message/Message';
import {Message1} from './Message1/Message1';


export const DialogMessages = () => {
    return (
        <div className={s.elem}>
            <Message text={'Hello, I just read your profile and am intrigued. And I would like to get to know you'}/>
            <Message1 text={'I think it is possible that we can meet in the near future and spend some time together'}/>
            <Message text={'I have read the things you like and I find it fascinating because I like all of those things too'}/>
            <Message1 text={'You seem really interesting and I was wondering if you would like to talk?'}/>
            <Message text={'I generally prefer to be in a calming atmosphere — whether that’s at home or outside. '}/>
            <Message1 text={'I need to go out to lively places and meet new people.'}/>
            <Message text={'I can’t be on the internet every day because I have a busy work schedule and so I hope you be patient with my replies to your letters'}/>
            <Message1 text={'Hope to hear back from you and I hope you have a great day!'}/>
            <Message text={'give my kind/best regards to your family'}/>
        </div>
    )
}