import {ChangeEvent} from 'react';
import {ActionTypes, store} from '../ReduxStore';

export type StatePostDataType = {
    newPostText: string
    postsData: Post[]
}

export type Post = {
    id: number
    post: string
    count: number
}

export type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

const initialState = {
    newPostText: '',
    postsData: [
        {id: 1, post: 'Hey, why nobody love me?', count: 23},
        {id: 2, post: 'It is our new program! Hey!', count: 11},
        {id: 3, post: 'Life is good! And live well!', count: 48},
    ]
}

export const postDataReducer = (state: StatePostDataType = initialState, action: ActionTypes): StatePostDataType => {

    let stateCopy = {
        ...state,
        postsData: [...state.postsData]
    }

    switch (action.type) {
        case 'ADD-POST':
            const newMessage: Post = {
                id: 4,
                post: action.postMessage,
                count: 0}
            stateCopy.postsData.push(newMessage)
            return stateCopy
        case
            'UPDATE-NEW-POST-TEXT':
            stateCopy.newPostText = action.newPostText
            return stateCopy
        default:
            return state
    }
}
export const OnPostChangeHandlerAC = (e: ChangeEvent<HTMLTextAreaElement>): ActionTypes => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: e.currentTarget.value
    } as const
}
export const UpdateNewPostTextAC = (): ActionTypes => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: ''
    }
}
export const addPostAC = (): ActionTypes => {
    return {
        type: 'ADD-POST',
        postMessage: store.getState().postsData.newPostText
    }
}
