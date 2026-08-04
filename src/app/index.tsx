import React from 'react'
import './styles/index.css'

import {App} from "@/app/App";

import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

const rootView = document.getElementById('root')

if (rootView) {
    const root = createRoot(rootView)

  root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
  )
}
