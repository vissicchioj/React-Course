import React from "react"
import './App.css';
import Favorite from "./components/Favorite";

export default function App() {
  const [contact, setContact] = React.useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false
  })
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     */
    
  /**
     * Challenge: Move the star image into its own component
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

  // let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

  function toggleFavorite() {
    setContact(prevContact =>
      {
        return{
          ...prevContact,
          isFavorite: !prevContact.isFavorite
        }
      })
}
  
  return (
      <main>
          <article className="card">
              <img src={require("./images/user.png")} className="card--image" />
              <div className="card--info">
                  <Favorite 
                    isFilled = {contact.isFavorite}
                    setFilled = {toggleFavorite}
                  />
                  {/* <img 
                      src={require(`./images/${starIcon}`)} 
                      className="card--favorite"
                      onClick={toggleFavorite}
                  /> */}
                  <h2 className="card--name">
                      {contact.firstName} {contact.lastName}
                  </h2>
                  <p className="card--contact">{contact.phone}</p>
                  <p className="card--contact">{contact.email}</p>
              </div>
              
          </article>
      </main>
  )
}

