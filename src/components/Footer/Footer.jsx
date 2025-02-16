import React from 'react'
import Style from './Footer.module.css'
import { useNavigate } from 'react-router-dom';


export default function Footer()
{
    const navigate = useNavigate();

    return (<footer className={Style.footer_container}>
        <input onClick={() => navigate("reminder")} type="button" value="+ Escreva um lembrete" />
    </footer>);
}