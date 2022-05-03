import './App.css';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {StatePropsType, ActionTypes} from './Redux/State';


type AppType = {
    state: StatePropsType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionTypes) => void
}

export const App = (props: AppType) => {
    return (
        <div className="wrapper">
            <Header/>
            <Main
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
                // updateNewPostText={props.updateNewPostText}
                // addPost={props.addPost}
                postsData={props.state.postsData}
                dialogsData={props.state.dialogsData}
                dialogMessages={props.state.dialogMessages}/>
            {/*<Footer/>*/}
        </div>
    )
}
