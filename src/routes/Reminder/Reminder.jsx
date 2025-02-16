import React from 'react'
import Header from '../../components/Header/Header'
import Textarea from '../../components/Textarea/Textarea'
import { useNavigate } from 'react-router-dom'

export default function Reminder()
{
    const navigate = useNavigate();
    const header_options = [{ name:"SALVAR", event: null } ];

    const header_title = {
        text: "ADICIONAR O LEMBRETE", event: null,
        icon: { name: "back", event: () => navigate(-1) },
    };

    return (<>
        <Header title={header_title} options={header_options} icons={null} />
        <Textarea />
    </>);
}