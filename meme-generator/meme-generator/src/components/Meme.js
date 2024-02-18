import React from "react"
import memesData from "../memesData.js";

function Meme() {
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)

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
            <img src = {memeImage} className="meme-image"/>
        </main>
    )
}

export default Meme;