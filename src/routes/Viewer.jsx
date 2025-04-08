import React from 'react'
import Header from '../components/Header/Header'
import ReminderViewer from '../components/ReminderViewer/ReminderViewer'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Viewer()
{
    //Obtendo o objeto de navegação e recuperando o reminder escolhido.
    const navigate = useNavigate();
    const location = useLocation();
    const reminder = location.state.reminder || {};

    //Configurando o cabeçalho da tela de exibição do lembrete.
    const header_title = { name: "", icon: { name: "back", event: () => navigate(-1) } };
    const header_options = [
        { name: "CONCLUIR", event: null },
        { name: "EDITAR", event: null }
    ];

    return <>
        <Header title={header_title} options={header_options} />
        <ReminderViewer reminder={reminder} />
    </>
}