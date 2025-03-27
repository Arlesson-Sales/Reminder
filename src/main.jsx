import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./main.css"

//- Importando rotas
import App from './App'
import Home from './routes/Home'
import Editor from './routes/Editor'

const router = createBrowserRouter([
    {
        path: "/reminder",
        element: <App />,
        children: [
            { path: "/reminder", element: <Home /> },
            { path: "/reminder/editor", element: <Editor /> }
        ]
    },

]);

const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);