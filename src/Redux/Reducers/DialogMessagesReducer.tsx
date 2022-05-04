import {ActionTypes, StatePropsType} from '../Store'
import {ChangeEvent} from 'react';


export const dialogMessagesReducer = (state: StatePropsType, action: ActionTypes) => {
  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-TEXT':
      state.newMessageText = action.newMessageText
      return state
    case 'SEND-MESSAGE':
      const messageText = state.newMessageText
      state.newMessageText = ''
      state.dialogMessages.push({id: 10, message: messageText, author: 'own'})
          return state
    default:
      return state
  }
}

export const onMessageChangeHandlerAC = (e: ChangeEvent<HTMLTextAreaElement>): ActionTypes => {
  return {
    type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: e.currentTarget.value
  }
}
