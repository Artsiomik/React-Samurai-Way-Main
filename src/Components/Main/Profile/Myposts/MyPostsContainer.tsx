import React, {ChangeEvent} from 'react';
import {addPostAC, OnPostChangeHandlerAC, Post, UpdateNewPostTextAC} from '../../../../Redux/Reducers/PostDataReducer'
import {Myposts} from './Myposts';
import {connect} from 'react-redux';
import {AppStoreType} from '../../../../Redux/ReduxStore';
import {Dispatch} from 'redux';



export type mapStateToPropsType = {
    postsData: Post[]
    newPostText: string
}

export type mapDispatchToPropsType = {
    OnPostChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => {
    return {
        postsData: state.postsData.postsData,
        newPostText: state.postsData.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        OnPostChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(OnPostChangeHandlerAC(e))
        },
        addPost: () => {
            dispatch(addPostAC())
            dispatch(UpdateNewPostTextAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)