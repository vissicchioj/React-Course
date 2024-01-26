
function Card(props) {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online")
    {
        badgeText = "ONLINE"
    } 

    return (
        <div className="card">
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img src = {require("../images/" + props.item.coverImg)} className="swimmer"/>
            <div className="cardInfo">
                <p>
                    <img src = {require("../images/star.png")} className="star"/>
                    {props.item.stats.rating} <span className = 'spanLocation'>({props.item.stats.reviewCount})·{props.item.location}</span>
                </p>
                <p>{props.item.title}</p>
                <p><span className = "spanPrice">From ${props.item.price} </span> / person</p>
            </div>
        </div>
    );
}

export default Card;