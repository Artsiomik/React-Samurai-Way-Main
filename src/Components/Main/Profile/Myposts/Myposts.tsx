import React, {useRef} from 'react';
import style from './Myposts.module.css';
// import {Textarea} from './Textarea/Textarea';
// import {Button} from './Button/Button';
import {Message} from './Message/Message';

type PostsDataType = {
    postsData: Array<PostArray>
    addPost: (postMessage: string) => void
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

    const addPostRef = useRef<HTMLTextAreaElement | null>(null)

    const addPost = () => {
        if (addPostRef.current) {
            props.addPost(addPostRef.current.value)
            addPostRef.current.value = ''
        }
    }

    return (
        <div className={style.myposts}>
            <div className={style.title}>My posts</div>
            <textarea name="text" ref={addPostRef}>my post...</textarea>
            <div className={style.button}>
                <button onClick={addPost} className={style.send}>Send</button>
            </div>
            <div className={style.mypostsout}>
                {newMyPostsElements}
            </div>
        </div>
    )
}