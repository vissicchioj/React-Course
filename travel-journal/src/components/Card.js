
function Card(props){
    return (
        <div className = "card">
            <img src = {require("../images/" + props.item.img)} className = "locationImg"/>
            <div className = "information">
                <div className = "location">
                    <img src = {require("../images/marker.png")} />
                    <p>{props.item.location}</p>
                    <a href = {props.item.maps}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <h3>{props.item.date}</h3>
                <p>{props.item.description}</p>
        </div>
        </div>
    )
}

export default Card;