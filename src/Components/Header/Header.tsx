import React from 'react';
import logo from '../Images/Logo1.png';
import s from'./Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <a href="" className={s.logo}><img src={logo} alt="logo"/></a>
            <div className={s.text}>the World</div>
            <div className={s.title}>My First App</div>
        </header>
    )
}
