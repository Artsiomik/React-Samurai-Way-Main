import React from 'react';
import {messageDataType} from '../Components/Main/Messages/DialogMessages/DialogMessages';


export type StatePropsType = {
    postsData: Array<PostArray>
    dialogsData: Array<DialogsArray>
    dialogMessages: Array<messageDataType>
    newPostText: string
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

let rerenderEntireTree = (tate: StatePropsType)=> {
    console.log('')
}

export let state: StatePropsType = {

    newPostText: 'change text',

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
}

export const addPost = (postMessage: string) => {
    const newMessage: PostArray = {
        id: 4,
        post: postMessage,
        count: 0,
    }
    state.postsData.push(newMessage)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newPostText: string) => {
    state.newPostText = newPostText
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: StatePropsType) => void) => {
    rerenderEntireTree = observer
}