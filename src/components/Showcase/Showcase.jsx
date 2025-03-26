import React from 'react'
import Style from './Showcase.module.css'

function createReminderElements(reminders)
{
    return reminders.map((reminder, index) => {
        return (
            <li key={index}>
                <p className={Style.reminder_title}>{reminder.title}</p>
                <p className={Style.reminder_alert}>Nenhum alerta</p>
                <div className="default_bar"></div>
            </li>
        );
    });
}

export default function Showcase(props)
{
    return (
        <section className={Style.reminder_list}>
            <ul> {createReminderElements(props.reminders)} </ul>
        </section>
    );
}