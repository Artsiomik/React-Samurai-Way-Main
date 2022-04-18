import React from 'react';
import style from './Myposts.module.css';
import {Textarea} from './Textarea/Textarea';
import {Button} from './Button/Button';
import {Message} from './Message/Message';

type PostsDataType = {
    postsData: Array<PostArray>
}
type PostArray = {
    id: number
    post: string
    count: number
}

export const Myposts = (props:PostsDataType) => {


    let newMyPostsElements = props.postsData.map((m) => {
        return <Message text={m.post} id={m.id} likeCount={m.count}/>
    })

    return (
        <div className={style.myposts}>
            <div className={style.title}>My posts</div>
            <Textarea/>
            <Button/>
            <div className={style.mypostsout}>
                {newMyPostsElements}
            </div>
        </div>
    )
}