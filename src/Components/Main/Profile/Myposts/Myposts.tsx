import React, {ChangeEvent, ChangeEventHandler} from 'react';
import style from './Myposts.module.css';
// import {Textarea} from './Textarea/Textarea';
// import {Button} from './Button/Button';
import {Message} from './Message/Message';
import {ActionTypes, addPostAC, UpdateNewPostTextAC} from '../../../../Redux/Store';
import {OnPostChangeHandlerAC} from '../../../../Redux/Reducers/PostDataReducer'

type PostsDataType = {
    postsData: Array<PostArray>
    newPostText: string
    dispatch: (action: ActionTypes) => void
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
        props.dispatch(addPostAC())
        props.dispatch(UpdateNewPostTextAC())
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(OnPostChangeHandlerAC(e))
    }

    return (
        <div className={style.myposts}>
            <div className={style.title}>My posts</div>
            <textarea onChange={onPostChangeHandler}
                      value={props.newPostText}
                      placeholder={'Enter your post...'}/>
            <div className={style.button}>
                <button onClick={addPost}
                        className={style.send}>Send
                </button>
            </div>
            <div className={style.mypostsout}>
                {newMyPostsElements}
            </div>
        </div>
    )
}