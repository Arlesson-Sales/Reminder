import React from 'react'
import Header from '../../components/Header/Header'

export default function Reminder()
{
    const options = [ { name:"SALVAR", event: null } ]

    return (<>
        <Header title_icon="back" title="ADICIONAR O LEMBRETE" options={options} icons={null} />
    </>);
}