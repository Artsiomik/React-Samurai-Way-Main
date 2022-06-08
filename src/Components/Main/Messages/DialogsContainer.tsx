import React, {ChangeEvent} from 'react';
import {messageDataType} from './DialogMessages/DialogMessages';
import {
    onMessageChangeHandlerAC,
    sendMessageAC,
    UpdateNewMessageTextAC
} from '../../../Redux/Reducers/DialogMessagesReducer'
import {AppStoreType} from '../../../Redux/ReduxStore';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {DialogsArray} from '../../../Redux/Reducers/DialogsDataReducer';

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    dialogsData: DialogsArray[]
    newMessageText: string
    dialogMessages: messageDataType[]
}

export type mapDispatchToPropsType = {
    sendMessage: () => void
    onMessageChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => {
    return {
        dialogsData: state.dialogsData.dialogsData,
        newMessageText: state.dialogMessages.newMessageText,
        dialogMessages: state.dialogMessages.dialogMessages
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
            dispatch(UpdateNewMessageTextAC())
        },
        onMessageChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(onMessageChangeHandlerAC(e))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)