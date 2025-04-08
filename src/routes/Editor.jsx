import React from 'react'
import Header from '../components/Header/Header.jsx'
import Textarea from '../components/Textarea/Textarea.jsx'
import { useNavigate } from 'react-router-dom'
import { saveReminder } from '../scripts/reminder.js'

export default function Editor()
{
    const navigate = useNavigate();
    const reminder = { title: "", container: null, itens: null };

    //Configurando o cabeçalho da tela de edição de lembrete.
    const header_options = [{ name:"SALVAR", event: () => {
        saveReminder(reminder); //Salavando o reminder.
        navigate(-1);           //Retornando a pagina inicial.
    } } ];

    const header_title = {
        name: "ADICIONAR O LEMBRETE", event: null,
        icon: { name: "back", event: () => navigate(-1) },
    };

    return (
        <>
            <Header title={header_title} options={header_options} icons={null} />
            <Textarea reminder={reminder} />
        </>
    );
}