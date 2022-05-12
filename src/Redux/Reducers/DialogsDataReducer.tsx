import {ActionTypes} from '../ReduxStore';

export type DialogsArray = {
    id: number
    name: string
}

const initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Kiril'},
        {id: 5, name: 'Gena'},
        {id: 6, name: 'Valera'},
    ]
}

export const dialogsDataReducer = (state = initialState, action: ActionTypes) => {

    return state
}