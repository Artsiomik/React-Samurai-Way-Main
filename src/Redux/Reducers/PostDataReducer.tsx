import {ActionTypes, PostArray, StatePropsType} from '../Store';
import {ChangeEvent} from 'react';

export const postDataReducer = (state: StatePropsType, action: ActionTypes) => {
switch (action.type) {
    case 'ADD-POST':
        const newMessage: PostArray = {
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
        type: 'UPDATE-NEW-POST-TEXT', newPostText: e.currentTarget.value
    }
}