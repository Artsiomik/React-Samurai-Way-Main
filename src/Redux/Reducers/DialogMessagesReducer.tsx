import {ChangeEvent} from 'react';
import {messageDataType} from '../../Components/Main/Messages/DialogMessages/DialogMessages';
import {ActionTypes} from '../ReduxStore';

export type DialogsMessageType = {
    newMessageText: string
    dialogMessages: messageDataType[]
}

export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

let initialState: DialogsMessageType = {
    newMessageText: '',
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
}


export const dialogMessagesReducer = (state = initialState, action: ActionTypes): DialogsMessageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        case 'SEND-MESSAGE':
            const newText = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                dialogMessages: [...state.dialogMessages, {id: 10, message: newText, author: 'own'}]
            }
        default:
            return state
    }
}

export const onMessageChangeHandlerAC = (e: ChangeEvent<HTMLTextAreaElement>): ActionTypes => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText: e.currentTarget.value
    } as const
}
export const sendMessageAC = (): ActionTypes => {
    return {
        type: 'SEND-MESSAGE'
    }
}
export const UpdateNewMessageTextAC = (): ActionTypes => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText: ''
    }
}

