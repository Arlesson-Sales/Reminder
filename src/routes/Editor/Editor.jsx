import React from 'react'
import Header from '../../components/Header/Header'
import Textarea from '../../components/Textarea/Textarea'
import { useNavigate } from 'react-router-dom'

function createReminderItens(container)
{
    return [...container?.children].map(element => {
        return {
            name: element.lastChild.value,
            checked: element.firstChild.checked
        }
    });
}

function saveReminder(reminder, navigate)
{
    const reminders = JSON.parse(window.localStorage.getItem("reminders_data") ?? "[]");
    reminder.itens = createReminderItens(reminder.container);
    delete reminder.container;
    
    reminders.push(reminder);
    window.localStorage.setItem("reminders_data", JSON.stringify(reminders));
    navigate(-1);
}

export default function Editor()
{
    const navigate = useNavigate();
    const reminder = { title: "", container: null, itens: null };
    const header_options = [{ name:"SALVAR", event: () => saveReminder(reminder, navigate) } ];

    const header_title = {
        text: "ADICIONAR O LEMBRETE", event: null,
        icon: { name: "back", event: () => navigate(-1) },
    };

    return (
        <>
            <Header title={header_title} options={header_options} icons={null} />
            <Textarea reminder={reminder} />
        </>
    );
}