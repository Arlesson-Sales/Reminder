import React from 'react'
import Style from './Showcase.module.css'
import { useNavigate } from 'react-router-dom'

/**
 * Essa simples função faz com que o lembrete selecionado pelo usuário na home sejá aberto no
 * visualizador de lembretes.
 * 
 * @param {Object} reminder referencia ao lembrete escolhido pelo usuário.
 * @param {import('react-router-dom').NavigateFunction} navigate referencia ao hook de navegação.
 */
function openReminderViewer(reminder, navigate)
{
    navigate("/reminder/viewer", { state: { reminder } });
}

/**
 * Essa função recebe o array de reminders, o percorre criando todos os elementos HTML
 * de cada reminder, retornando para o componente que fez a chamada.
 * 
 * @param {Array} reminders array de lembretes.
 * @param {import('react-router-dom').NavigateFunction} navigate referencia ao hook de navegação.
 * @returns {React.JSX.Element[]}
 */
function createReminderElements(reminders, navigate)
{
    return reminders.map((reminder, index) => {
        return (
            <li key={index} onClick={openReminderViewer.bind(null, reminder, navigate)}>
                <p className={Style.reminder_title}>{reminder.title}</p>
                <p className={Style.reminder_alert}>Nenhum alerta</p>
                <div className="default_bar"></div>
            </li>
        );
    });
}

/**
 * Esse componente representa a área da rota home onde serão exibidos todos os lembrentes
 * que foram salvos pelo usuário.
 * 
 * @param {Object} props 
 * @returns {React.JSX.Element}
 */
export default function Showcase(props)
{
    const navigate = useNavigate();

    return (
        <section className={Style.reminder_list}>
            <ul> {createReminderElements(props.reminders, navigate)} </ul>
        </section>
    );
}