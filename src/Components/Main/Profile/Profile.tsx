import React from 'react';
import {InfoUser} from './InfoUser/InfoUser';
import {Myposts} from './Myposts/Myposts';




type PostsDataType = {
    postsData: Array<PostArray>
    addPost: (postMessage: string)=> void
    newPostText: string
    updateNewPostText: (newText: string)=> void
}
type PostArray = {
    id: number
    post: string
    count: number
}

export const Profile = (props: PostsDataType) => {

    return (
        <>
            <InfoUser/>
            <Myposts addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}
                     postsData={props.postsData}/>
        </>
    )
}