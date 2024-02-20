import React from "react"

function Favorite(props){
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    
    return(
        <img 
            src={require(`../images/${starIcon}`)} 
            className="card--favorite"
            onClick={props.setFilled}
        />
    )
}

export default Favorite