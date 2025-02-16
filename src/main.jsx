import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./main.css"

//- Importando rotas
import Home from './routes/Home/Home'

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: []
    }
]);

const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<RouterProvider router={routers} />);