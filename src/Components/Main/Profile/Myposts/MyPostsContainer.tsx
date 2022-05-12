import React, {ChangeEvent} from 'react';
import {addPostAC, OnPostChangeHandlerAC, UpdateNewPostTextAC} from '../../../../Redux/Reducers/PostDataReducer'
import {ActionTypes} from '../../../../Redux/ReduxStore';
import {Myposts, PostArray} from './Myposts';

type PropsType = {
    newPostText: string
    postsData: Array<PostArray>
    dispatch: (action: ActionTypes) => void
}

export const MyPostsContainer = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(UpdateNewPostTextAC())
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(OnPostChangeHandlerAC(e))
    }

    return (
        <Myposts OnPostChangeHandler={onPostChangeHandler}
                 addPost={addPost}
                 postsData={props.postsData}
                 newPostText={props.newPostText}/>
    )
}