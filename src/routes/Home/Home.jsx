import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function toggleTheme()
{
    const main_element = document.querySelector("main");
    const current_theme_name = main_element.className;
    let next_theme_name = current_theme_name === "light_theme" ? "dark_theme" : "light_theme";

    main_element.classList.remove(current_theme_name);
    main_element.classList.add(next_theme_name);
    
    window.localStorage.setItem("user_theme", next_theme_name);
}

export default function Home()
{
    const header_title = { text: "REMINDER", icon: { name: "bell", event: null }, event: null };
    const header_icons = [
        { name: "search", event: null },
        { name: "dark", event: toggleTheme },
        { name: "menu", event: null }
    ];

    return (<>
        <Header title={header_title} options={null} icons={header_icons} />
        <div className="default_bar"></div>
        <Footer />
    </>);
}