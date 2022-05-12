import React, {ChangeEvent} from 'react';
import style from './Myposts.module.css';
import {Message} from './Message/Message';

type PropsType = {
    postsData: Array<PostArray>
    newPostText: string
    OnPostChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    addPost: () => void
}
export type PostArray = {
    id: number
    post: string
    count: number
}


export const Myposts = (props: PropsType) => {

    const newMyPostsElements = props.postsData.map((m) => {

        return <Message text={m.post} id={m.id} likeCount={m.count}/>
    })


    const onAddPost = () => {
        props.addPost()
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.OnPostChangeHandler(e)
    }

    return (
        <div className={style.myposts}>
            <div className={style.title}>My posts</div>
            <textarea onChange={onPostChangeHandler}
                      value={props.newPostText}
                      placeholder={'Enter your post...'}/>
            <div className={style.button}>
                <button onClick={onAddPost}
                        className={style.send}>Send
                </button>
            </div>
            <div className={style.mypostsout}>
                {newMyPostsElements}
            </div>
        </div>
    )
}