
function Card() {
    return (
        <div className="card">
            <img src = {require("../images/swimmer.png")} className="swimmer"/>
            <div className="cardInfo">
                <p>
                    <img src = {require("../images/star.png")} className="star"/>
                    5.0 <span className = 'spanLocation'>(6)·USA</span>
                </p>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className = "spanPrice">From $136 </span> / person</p>
            </div>
        </div>
    );
}

export default Card;