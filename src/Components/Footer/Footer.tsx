import React from "react";
import s from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.text}>Copy, 2022</div>
            <div className={s.text}>All rights reserved.</div>
        </footer>
    )
}