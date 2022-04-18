import React from 'react';
import logo from '../Images/Logo1.png';
import style from'./Header.module.css';

export const Header = () => {
    return (
        <header className={style.header}>
            <a href="" className={style.logo}><img src={logo} alt="logo"/></a>
            <div className={style.text}>APP</div>
            <div className={style.title}>My First App</div>
        </header>
    )
}
