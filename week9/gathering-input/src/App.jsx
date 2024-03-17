import React, { useState } from 'react'

import './App.css'

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [passwrd, setPasswrd] = useState("");
  const [textInputs, setTextInputs] = useState({
    firstName: "",
    lastName: "",
    passwrd: ""
  })
  function handleTextChange(evt) {
    
      if(evt.target.name === "pets") {
        setPets((previousPets) => {
          return !previousPets;
        })
      } else {
        setTextInputs((previousTextInputs) => {
          return {
            ...previousTextInputs,
            [evt.target.name]: evt.target.value
          }
        })
      }
      

  }
  const [pets, setPets] = useState(true);
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log({...textInputs, pets})
    // console.log({firstName, lastName, passwrd, pets})
  }
  return (
    <>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div>
            <label htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={textInputs.firstName}
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={textInputs.lastName}
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="passwrd">Password</label>
            <input
              type="password"
              name="passwrd"
              id="passwrd"
              value={textInputs.passwrd}
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="likesPets">Likes Pets</label>
          <input 
            type="checkbox"
            name="likesPets"
            id="likesPets"
            checked={pets}
            value={pets}
            onChange={handleTextChange} 
          />
          </div>
        </fieldset>
        <fieldset>
          <legend>RadioGroup</legend>
          <div>
            <label htmlFor="pepsi"> Pepsi
              <input type="radio" name="soda" id="pepsi" />
              </label>
            </div>
          <div>
            <label htmlFor="coke"> Coke
              <input type="radio" name="soda" id="coke" />
              </label>
            </div>
          <div>
            <label htmlFor="mtnDew"> Moutain Dew
              <input type="radio" name="soda" id="mtnDew" />
              </label>
            </div>
        </fieldset>
        <fieldset>
          <legend>Checkbox</legend>
          <label htmlFor="red"> Red
            <input type="checkbox"  name="colors" id="red"  />
          </label>
          <label htmlFor="blue"> Blue
            <input type="checkbox" 
              name="colors" id="blue" />
          </label>
          <label htmlFor="green"> Green
            <input type="checkbox"  name="colors" id="green"  />
          </label>
          <label htmlFor="cyan"> Cyan
            <input type="checkbox"name="colors" id="cyan"  /></label>
        </fieldset>
        <fieldset>
          <legend>Select</legend>
          <select name="playerType" id="playerType" >
            <option value="aggro">Aggro</option>
            <option value="control">Control</option>
            <option value="stompy">Stompy</option>
            <option value="mid-range">Mid Range</option>
          </select>
        </fieldset>
        <button type="submit"> Submit </button>
      </form>
    </>
  )
}

export default App
