import {combineReducers, createStore} from 'redux';
import {AddPostActionType, postDataReducer, UpdateNewPostTextActionType} from './Reducers/PostDataReducer';
import {dialogsDataReducer} from './Reducers/DialogsDataReducer';
import {
    dialogMessagesReducer,
    SendMessageActionType,
    UpdateNewMessageTextActionType
} from './Reducers/DialogMessagesReducer';


export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageTextActionType | SendMessageActionType

const reducers = combineReducers({
    postsData: postDataReducer,
    dialogsData: dialogsDataReducer,
    dialogMessages: dialogMessagesReducer
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>