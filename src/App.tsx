import './App.css';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {StatePropsType, ActionTypes} from './Redux/State';


type AppType = {
    state: StatePropsType
    dispatch: (action: ActionTypes) => void
}

export const App = (props: AppType) => {
    return (
        <div className="wrapper">
            <Header/>
            <Main
                newMessageText={props.state.newMessageText}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
                postsData={props.state.postsData}
                dialogsData={props.state.dialogsData}
                dialogMessages={props.state.dialogMessages}/>
            {/*<Footer/>*/}
        </div>
    )
}
