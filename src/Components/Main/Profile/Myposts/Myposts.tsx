import React, {ChangeEvent} from 'react';
import style from './Myposts.module.css';
import {Message} from './Message/Message';
import {MyPostsPropsType} from './MyPostsContainer';


export const Myposts = (props: MyPostsPropsType) => {

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