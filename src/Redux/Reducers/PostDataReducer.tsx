import {ActionTypes, PostArray, StatePropsType} from '../State';

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