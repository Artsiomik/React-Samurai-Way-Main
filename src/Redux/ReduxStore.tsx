import {combineReducers, createStore} from 'redux';
import {postDataReducer} from './Reducers/PostDataReducer';
import {dialogsDataReducer} from './Reducers/DialogsDataReducer';
import {dialogMessagesReducer} from './Reducers/DialogMessagesReducer';
import {messageDataType} from '../Components/Main/Messages/DialogMessages/DialogMessages';


export type StatePropsType = {
    postsData: Array<Post>
    dialogsData: Array<DialogsArray>
    dialogMessages: Array<messageDataType>
    newPostText: string
    newMessageText: string
}

export type Post = {
    id: number
    post: string
    count: number
}
export type DialogsArray = {
    id: number
    name: string
}

export type StoreType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageTextActionType | SendMessageActionType

export const addPostAC = (): ActionTypes => {
    return {
        type: 'ADD-POST', postMessage: store.getState().postsData.newPostText
    }
}
export const sendMessageAC = (): ActionTypes => {
    return {
        type: 'SEND-MESSAGE'
    }
}

export const UpdateNewPostTextAC = (): ActionTypes => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newPostText: ''
    }
}
export const UpdateNewMessageTextAC = (): ActionTypes => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: ''
    }
}



const reducers = combineReducers({
    postsData: postDataReducer,
    dialogsData: dialogsDataReducer,
    dialogMessages: dialogMessagesReducer
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>