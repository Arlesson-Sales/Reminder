import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./main.css"

//- Importando rotas
import Home from './routes/Home/Home'
import Editor from './routes/Editor/Editor'

const router = createBrowserRouter([
    { path: "/reminder", element: <Home /> },
    { path: "/reminder/editor", element: <Editor /> }
]);

const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);