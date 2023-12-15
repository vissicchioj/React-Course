

function Info() {


    return(
        <div className="info">
            <img src = {require("../images/proof.png")} className = "proof"/>
            <h1>Jake Vissicchio</h1>
            <h3>Aspiring Software Engineer</h3>
            <a href = "https://vissicchioj.github.io/">vissicchioj.github.io</a>
            <div className="buttons">
                <button type="emailButton" className="emailbutton" onClick={() => window.location = 'mailto:vissicchioj@gmail.com'}>
                    <img src = {require("../images/mail.png")}/> Email
                </button>
 
                <button type="linkedinButton" className="linkedinbutton" onClick={() => window.location = 'https://www.linkedin.com/in/jake-vissicchio-7a7207198/'}>
                    <img src = {require("../images/linkedin.png")}/> LinkedIn
                </button>
            </div>
        </div>
    )
}

export default Info