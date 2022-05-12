import {ChangeEvent} from 'react';
import {ActionTypes, Post} from '../ReduxStore';

type StatePostDataType = {
    newPostText:string
    postsData:Post[]
}

const initialState = {
    newPostText: '',
    postsData: [
        {id: 1, post: 'Hey, why nobody love me?', count: 23},
        {id: 2, post: 'It is our new program! Hey!', count: 11},
        {id: 3, post: 'Life is good! And live well!', count: 48},
    ]
}

export const postDataReducer = (state: StatePostDataType = initialState, action: ActionTypes):StatePostDataType => {
    switch (action.type) {
        case 'ADD-POST':
            const newMessage: Post = {
                id: 4,
                post: action.postMessage,
                count: 0,
            }
            state.postsData.push(newMessage)
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state
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