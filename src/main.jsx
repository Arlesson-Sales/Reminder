import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./main.css"

//- Importando rotas
import Home from './routes/Home/Home'
import Reminder from './routes/Reminder/Reminder'

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/reminder", element: <Reminder /> }
]);

const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);