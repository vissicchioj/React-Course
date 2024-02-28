import React from "react"

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

    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    console.log(meme)

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    console.log(allMemeImages)

    function getMemeImage(){
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme =>
            {
                return{
                    ...prevMeme,
                    randomImage: memesArray[randomNumber].url
                }
            })
    }
 
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                
                <input 
                    type = "text"
                    placeholder = "Top Text"
                    className = "form--input"
                    name = "topText"
                    onChange={handleChange}
                />
                <input 
                    type = "text"
                    placeholder = "Bottom Text"
                    className = "form--input"
                    name = "bottomText"
                    onChange={handleChange}
                />
                <button 
                    className = "form--button"
                    type="button"
                    onClick = {getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
                
            </div>
            <div className="meme">
                <img src = {meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;