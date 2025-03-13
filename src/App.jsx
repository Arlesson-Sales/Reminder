import React from 'react'
import { Outlet } from 'react-router-dom'

/**
 * Essa função é chamada sempre que o App é carregado pois ela verifica se já existe informações de um
 * tema que tenha sido definido anteriormente no cache do navegador para assim seta-lo.
 * 
 * @returns {String}
 */
function getUserTheme()
{
    const data = window.localStorage.getItem("reminder_theme_data");
    const reminder_theme_data = JSON.parse(data);
    
    window.document.body.style.backgroundColor = reminder_theme_data?.body_color ?? "#fdfdfd"
    return reminder_theme_data?.name ?? "light_theme";
}

export default function App()
{
    return (
        <main className={getUserTheme()}>
            <Outlet />
        </main>
    );
}