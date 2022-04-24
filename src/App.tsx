import './App.css';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
// import {Footer} from './Components/Footer/Footer';
import {addPost, StatePropsType} from './Redux/State';



type AppType = {
    state: StatePropsType
    addPost: (postMessage: string)=> void
}

export const App = (props: AppType) => {

    return (
        <div className="wrapper">
            <Header/>
            <Main addPost={addPost} postsData={props.state.postsData} dialogsData={props.state.dialogsData}
                  dialogMessages={props.state.dialogMessages}/>
            {/*<Footer/>*/}
        </div>
    )
}
