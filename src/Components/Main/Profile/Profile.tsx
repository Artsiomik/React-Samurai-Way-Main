import React, {ChangeEvent} from 'react';
import {InfoUser} from './InfoUser/InfoUser';
import {Myposts} from './Myposts/Myposts';
import {ActionTypes} from '../../../Redux/ReduxStore';
import {MyPostsContainer} from './Myposts/MyPostsContainer';


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

export const Profile = (props: PostsDataType) => {

    return (
        <>
            <InfoUser/>
            <MyPostsContainer
                dispatch={props.dispatch}
                newPostText={props.newPostText}
                postsData={props.postsData}/>
        </>
    )
}