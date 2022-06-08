import {combineReducers, createStore} from 'redux';
import {AddPostActionType, postDataReducer, UpdateNewPostTextActionType} from './Reducers/PostDataReducer';
import {dialogsDataReducer} from './Reducers/DialogsDataReducer';
import {
    dialogMessagesReducer, DialogsMessageType,
    SendMessageActionType,
    UpdateNewMessageTextActionType
} from './Reducers/DialogMessagesReducer';

export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageTextActionType | SendMessageActionType

const rootReducer = combineReducers({
    postsData: postDataReducer,
    dialogsData: dialogsDataReducer,
    dialogMessages: dialogMessagesReducer
})


export const store = createStore(rootReducer)

export type AppStoreType = ReturnType<typeof rootReducer>;