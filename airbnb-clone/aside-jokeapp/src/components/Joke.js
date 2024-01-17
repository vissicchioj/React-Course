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
                <h3>{props.setup}</h3>
                <p>{props.punchline}</p>
            </div>
        );
    }
}

export default Joke;