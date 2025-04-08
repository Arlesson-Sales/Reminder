import React from 'react'
import Style from './Footer.module.css'
import { useNavigate } from 'react-router-dom';

/**
 * Esse componente representa o roda-pé da pagina principal, onde o usuário pode
 * clicar para ser redirecionado ao editor de lembretes.
 * 
 * @returns {React.JSX.Element}
 */
export default function Footer()
{
    const navigate = useNavigate();

    return (
        <footer className={Style.footer_container}>
            <input className="default_button" onClick={() => navigate("editor")} type="button" value="+ Escreva um lembrete" />
        </footer>
    );
}