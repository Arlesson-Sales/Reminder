import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Home()
{
    const icons = [
        { name: "search", event: null },
        { name: "menu", event: null }
    ];

    return (<>
        <Header title_icon="bell" title="REMINDER" options={null} icons={icons} />
        <div className="default_bar"></div>
        <Footer />
    </>);
}