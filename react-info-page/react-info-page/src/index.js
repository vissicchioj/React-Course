import React from "react"
import ReactDOM from "react-dom"
import './index.css';




function Page() {
    return (
        <div>
            <Header />
            <h1>Reasons I am excited to learn React:</h1>
            <ol>
                <li>Making dynamic webpages is an awesome skill</li>
                <li>I want money</li>
                <li>I want to be employed</li>
            </ol>
            <footer>
                <small>@ 2023 Vissicchio Development. All rights reserved.</small>
            </footer>
        </div>
    )
}

function Header() {
    return (
        <div>
            <header>
                <nav>
                    <img src = {require("./logo.png")} width = "40px" />
                </nav>
            </header>
        </div>
    )
}

ReactDOM.render(
    <Page />
    , document.getElementById("root")
)

