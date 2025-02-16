import React from 'react'
import Header from '../../components/Header/Header'

export default function Home()
{
    const icons = [
        { name: "search", event: null },
        { name: "menu", event: null }
    ];

    const options = [
        { name: "CONCLUIR", event: null },
        { name: "CANCELAR", event: null }
    ];

    return (<>
        <Header title_icon="bell" title="REMINDER" options={options} icons={icons} />
    </>);
}