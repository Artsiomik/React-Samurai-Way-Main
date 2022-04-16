import React from 'react';
import s from './Myposts.module.css';
import {Textarea} from './Textarea/Textarea';
import {Button} from './Button/Button';
import {Message} from './Message/Message';


export const Myposts = () => {

    let postsData = [
        {id: 1, post: 'Hey, why nobody love me?', count: 23},
        {id: 2, post: 'It is our new program! Hey!', count: 11},
        {id: 3, post: 'Life is good! And live well!', count: 48},
    ]

    let newMyPostsElements = postsData.map((el)=> {
        return <Message text={el.post} id={el.id} likeCount={el.count}/>
    })

    return (
        <div className={s.myposts}>
            <div className={s.title}>My posts</div>
            <Textarea/>
            <Button/>
            <div className={s.mypostsout}>
                {newMyPostsElements}
            </div>
        </div>
    )
}