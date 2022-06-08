import './App.css';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {ActionTypes, AppStoreType} from './Redux/ReduxStore';


type AppType = {
    state: AppStoreType
    dispatch: (action: ActionTypes) => void
}

export const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
                {/*newMessageText={props.state.dialogMessages.newMessageText}*/}
                {/*newPostText={props.state.postsData.newPostText}*/}
                {/*dispatch={props.dispatch}*/}
                {/*postsData={props.state.postsData.postsData}*/}
                {/*dialogsData={props.state.dialogsData.dialogsData}*/}
                {/*dialogMessages={props.state.dialogMessages.dialogMessages}*/}
            {/*<Footer/>*/}
        </div>
    )
}
