
function Card(props) {
    return (
        <div className="card">
            <img src = {require("../images/" + props.img)} className="swimmer"/>
            <div className="cardInfo">
                <p>
                    <img src = {require("../images/star.png")} className="star"/>
                    {props.stats.rating} <span className = 'spanLocation'>({props.stats.reviewCount})·{props.country}</span>
                </p>
                <p>{props.title}</p>
                <p><span className = "spanPrice">From ${props.price} </span> / person</p>
            </div>
        </div>
    );
}

export default Card;