import React, {ChangeEvent} from 'react';
import {messageDataType} from '../Components/Main/Messages/DialogMessages/DialogMessages';

export type StatePropsType = {
    postsData: Array<PostArray>
    dialogsData: Array<DialogsArray>
    dialogMessages: Array<messageDataType>
    newPostText: string
    newMessageText: string
}

type PostArray = {
    id: number
    post: string
    count: number
}
type DialogsArray = {
    id: number
    name: string
}

export type StoreType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _callSubscriber: () => void
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newPostText: string) => void
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
        type: 'ADD-POST', postMessage: store.getState().newPostText
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

export const OnPostChangeHandlerAC = (e: ChangeEvent<HTMLTextAreaElement>): ActionTypes => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newPostText: e.currentTarget.value
    }
}
export const onMessageChangeHandlerAC = (e: ChangeEvent<HTMLTextAreaElement>): ActionTypes => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: e.currentTarget.value
    }
}

export const store: StoreType = {
    _state: {

        newPostText: 'change text',

        newMessageText: 'change text',

        postsData: [
            {id: 1, post: 'Hey, why nobody love me?', count: 23},
            {id: 2, post: 'It is our new program! Hey!', count: 11},
            {id: 3, post: 'Life is good! And live well!', count: 48},
        ],

        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Kiril'},
            {id: 5, name: 'Gena'},
            {id: 6, name: 'Valera'},
        ],

        dialogMessages: [
            {
                id: 1,
                message: 'Hello, I just read your profile and am intrigued. And I would like to get to know you',
                author: 'own'
            },
            {
                id: 2,
                message: 'I think it is possible that we can meet in the near future and spend some time together',
                author: 'componion'
            },
            {
                id: 3,
                message: 'I have read the things you like and I find it fascinating because I like all of those things too',
                author: 'own'
            },
            {
                id: 4,
                message: 'You seem really interesting and I was wondering if you would like to talk?',
                author: 'componion'
            },
            {
                id: 5,
                message: 'I generally prefer to be in a calming atmosphere — whether that’s at home or outside. ',
                author: 'own'
            },
            {id: 6, message: 'I need to go out to lively places and meet new people.', author: 'componion'},
            {
                id: 7,
                message: 'I can’t be on the internet every day because I have a busy work schedule and so I hope you be patient with my replies to your letters',
                author: 'own'
            },
            {id: 8, message: 'Hope to hear back from you and I hope you have a great day!', author: 'componion'},
            {id: 9, message: 'give my kind/best regards to your family', author: 'own'},
        ]
    },
    _callSubscriber() {
        console.log('change text')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newMessage: PostArray = {
                id: 4,
                post: action.postMessage,
                count: 0,
            }
            this._state.postsData.push(newMessage)
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.newPostText = action.newPostText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.newMessageText = action.newMessageText
            this._callSubscriber()
        } else if (action.type === 'SEND-MESSAGE') {
            const messageText = this._state.newMessageText
            this._state.newMessageText = ''
            this._state.dialogMessages.push({id: 10, message: messageText, author: 'componion'})
            this._callSubscriber()
        }
    }
}









