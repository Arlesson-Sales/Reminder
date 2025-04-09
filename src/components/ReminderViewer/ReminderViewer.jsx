import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Style from './ReminderViewer.module.css'

function modifyReminder(item_element, index, setReminder)
{
    if (item_element.localName !== "li")
        item_element = item_element.parentNode;

    item_element.children[1].classList.toggle("item_checked");
    
    setReminder(old_reminder => {
        const new_reminder = { ...old_reminder };
        item_element.children[0].checked = !old_reminder.itens[index].checked;
        new_reminder.itens[index].checked = !old_reminder.itens[index].checked;
        return new_reminder;
    });
}

function createViewerItens(reminder, setReminder)
{
    return reminder.itens.map((item, index) => {
        const { name, checked } = item;
        const className = checked ? "item_checked" : "";

        return (
            <li key={index} onClick={event => modifyReminder(event.target, index, setReminder)}>
                <input type="checkbox" defaultChecked={checked} />
                <p className={Style[className]}>{name}</p>
            </li>
        );
    });
}

export default function ReminderViewer()
{
    const location = useLocation();
    const [ reminder, setReminder ] = useState(() => location.state.reminder);

    return (
        <section className={Style.reminder_viewer}>
            <header className={Style.viewer_header}>
                <p>{reminder.title}</p>
            </header>
            <ul className={Style.viewer_list}>{ createViewerItens(reminder, setReminder) }</ul>
        </section>
    );
}