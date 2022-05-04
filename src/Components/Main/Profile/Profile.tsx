import React from 'react';
import {InfoUser} from './InfoUser/InfoUser';
import {Myposts} from './Myposts/Myposts';
import {ActionTypes} from '../../../Redux/Store';


type PostsDataType = {
    postsData: Array<PostArray>
    newPostText: string
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionTypes) => void
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
            <Myposts
                dispatch={props.dispatch}
                newPostText={props.newPostText}
                postsData={props.postsData}/>
        </>
    )
}