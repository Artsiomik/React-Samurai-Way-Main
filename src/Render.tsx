import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, StatePropsType} from './Redux/State';

type addPostPropType={
    addPost: (postMessage: string)=> void
}

export const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
