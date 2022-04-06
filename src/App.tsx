import './App.css';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {Footer} from './Components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';

export const App = () => { // App это КОМПОНЕНТА которая возвращает рзметку jsx
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Main/>
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
    )
}
