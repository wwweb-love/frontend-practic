import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Blog from './Blog.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
)
