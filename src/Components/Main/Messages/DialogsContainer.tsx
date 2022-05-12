import React, {ChangeEvent} from 'react';
import {messageDataType} from './DialogMessages/DialogMessages';
import {
    onMessageChangeHandlerAC,
    sendMessageAC,
    UpdateNewMessageTextAC
} from '../../../Redux/Reducers/DialogMessagesReducer'
import {ActionTypes} from '../../../Redux/ReduxStore';
import {Dialogs} from './Dialogs';

type PropsType = {
    dialogsData: Array<DialogsDataArray>
    dialogMessages: Array<messageDataType>
    dispatch: (action: ActionTypes) => void
    newMessageText: string
}

type DialogsDataArray = {
    id: number
    name: string
}

export const DialogsContainer = (props: PropsType) => {

    const sendMessageOnClickHandler = () => {
        props.dispatch(sendMessageAC())
        props.dispatch(UpdateNewMessageTextAC())
    }
    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onMessageChangeHandlerAC(e))
    }

    return (
        <Dialogs
            sendMessage={sendMessageOnClickHandler}
            onMessageChangeHandler={onMessageChangeHandler}
            dialogsData={props.dialogsData}
            dispatch={props.dispatch}
            newMessageText={props.newMessageText}
            dialogMessages={props.dialogMessages}/>
    )
}