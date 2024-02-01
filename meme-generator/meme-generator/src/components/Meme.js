import React from "react"
import memesData from "../memesData.js";

function Meme() {
    let meme

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
        return url
    }


    return (
        <main>
            <form className = "form">
                <input 
                    type = "text"
                    placeholder = "Top Text"
                    className = "form-input"
                />
                <input 
                    type = "text"
                    placeholder = "Bottom Text"
                    className = "form-input"
                />
                <button 
                    className = "form-button"
                    type="button"
                    onClick = {getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
            </form>
        </main>
    )
}

export default Meme;