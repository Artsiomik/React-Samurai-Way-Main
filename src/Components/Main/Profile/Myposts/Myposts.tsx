import React, {ChangeEvent, ChangeEventHandler} from 'react';
import style from './Myposts.module.css';
// import {Textarea} from './Textarea/Textarea';
// import {Button} from './Button/Button';
import {Message} from './Message/Message';


type PostsDataType = {
    postsData: Array<PostArray>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
type PostArray = {
    id: number
    post: string
    count: number
}

export const Myposts = (props: PostsDataType) => {

    const newMyPostsElements = props.postsData.map((m) => {

        return <Message text={m.post} id={m.id} likeCount={m.count}/>
    })


    const addPost = () => {
            props.addPost(props.newPostText)
            props.updateNewPostText('')
    }

    const onPostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={style.myposts}>
            <div className={style.title}>My posts</div>
            <textarea onChange={onPostChangeHandler}
                      name="text"
                      value={props.newPostText}/>
            <div className={style.button}>
                <button onClick={addPost}
                        className={style.send}>Send</button>
            </div>
            <div className={style.mypostsout}>
                {newMyPostsElements}
            </div>
        </div>
    )
}