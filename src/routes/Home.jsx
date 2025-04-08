import React, { useState } from 'react'
import Header from '../components/Header/Header.jsx'
import Showcase from '../components/Showcase/Showcase.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { loadReminders } from '../scripts/reminder.js';

/**
 * Essa função é responsavel por fazer a troca entre o tema branco e o escuro, além de salvar
 * essas informações no local storage do navegador parem serem resgatadas futuramente.
 */
function toggleTheme()
{
    const main_element = document.querySelector("main");
    const current_theme_name = main_element.className;

    const reminder_theme_data = {
        name: current_theme_name === "light_theme" ? "dark_theme" : "light_theme",
        body_color: current_theme_name === "light_theme" ? "#313131" : "#fdfdfd"
    }

    main_element.classList.remove(current_theme_name);
    main_element.classList.add(reminder_theme_data.name);

    window.document.body.style.backgroundColor = reminder_theme_data?.body_color ?? "#fdfdfd"
    window.localStorage.setItem("reminder_theme_data", JSON.stringify(reminder_theme_data));
}

export default function Home()
{
    //Configurando o cabeçalho e seus icones.
    const header_title = { name: "REMINDER", icon: { name: "bell", event: null }, event: null };
    const header_icons = [
        { name: "search", event: null },
        { name: "dark", event: toggleTheme },
        { name: "menu", event: null }
    ];


    return (
        <>
            <Header title={header_title} options={null} icons={header_icons} />
            <div className="default_bar"></div>
            <Showcase reminders={loadReminders()} />
            <Footer />
        </>
    );
}