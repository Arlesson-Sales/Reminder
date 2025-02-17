import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Home()
{
    const header_title = { text: "REMINDER", icon: { name: "bell", event: null }, event: null };
    const header_icons = [
        { name: "search", event: null },
        { name: "dark", event: null },
        { name: "menu", event: null }
    ];

    return (<>
        <Header title={header_title} options={null} icons={header_icons} />
        <div className="default_bar"></div>
        <Footer />
    </>);
}