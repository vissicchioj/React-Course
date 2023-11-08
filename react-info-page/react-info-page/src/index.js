import React from "react"
import ReactDOM from "react-dom"
import './index.css';




function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className="head">
            <nav className="nav">
                <img src = {require("./logo.png")} className = "logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div className="main">
            <h1>Reasons I am excited to learn React:</h1>
            <ol>
                <li>Making dynamic webpages is an awesome skill</li>
                <li>I want money</li>
                <li>I want to be employed</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer className="foot">
            <small>@ 2023 Vissicchio Development. All rights reserved.</small>
        </footer>
    )
}

ReactDOM.render(
    <Page />
    , document.getElementById("root")
)

