import React from 'react'
import Style from './Footer.module.css'
import { useNavigate } from 'react-router-dom';


export default function Footer()
{
    const navigate = useNavigate();

    return (
        <footer className={Style.footer_container}>
            <input className="default_button" onClick={() => navigate("editor")} type="button" value="+ Escreva um lembrete" />
        </footer>
    );
}