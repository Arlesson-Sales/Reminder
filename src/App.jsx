import React from 'react'
import { Outlet } from 'react-router-dom'

function getUserTheme()
{
    const user_theme_name = window.localStorage.getItem("user_theme");
    return user_theme_name ?? "light_theme";
}

export default function App()
{
    return (<main className={getUserTheme()}>
        <Outlet />
    </main>);
}