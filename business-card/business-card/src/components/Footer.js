function Footer() {
    return(
        <div className="footer">
            <img src = {require("../images/insta.png")} className="insta" onClick={() => window.location = 'https://www.instagram.com/vissicchioj/'}/>

            <img src = {require("../images/github.png")} className="github" onClick={() => window.location = 'https://github.com/vissicchioj'}/>
        </div>
        )
}

export default Footer