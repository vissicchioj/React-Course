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

export default Header