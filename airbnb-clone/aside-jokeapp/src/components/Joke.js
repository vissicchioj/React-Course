function Joke(props) {
    let isPunchline = props.punchline
    if (isPunchline == "") {
        return (
            <div className="joke-card">
                <p>{props.setup}</p>
            </div>
        );
    }
    else {
        return (
            <div className="joke-card">
                <div className = "setup">
                    <h3>{props.setup}</h3>
                </div>
                <div className = "punchline">
                    <p>{props.punchline}</p>
                </div>
            </div>
        );
    }
}

export default Joke;