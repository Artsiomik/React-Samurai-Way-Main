import {ActionTypes, StatePropsType} from '../State'


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
