import React from 'react'
import ReactDOM from 'react-dom/client'
import './lib.scss'
import Header from "./components/header/header.jsx";
import Content from "./components/content/content.jsx";
import Footer from "./components/footer/footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <Content/>
        <Footer/>
    </React.StrictMode>,
)
