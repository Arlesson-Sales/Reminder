import React from 'react'
import Style from './Footer.module.css'

export default function Footer()
{
    return (<footer className={Style.footer_container}>
        <input type="button" value="+ Escreva um lembrete" />
    </footer>);
}