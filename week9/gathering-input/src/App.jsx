import { useState } from 'react'

import './App.css'

function App() {
 
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    passwrd: "",
    soda: ["pepsi"],
    pets: true,
    colors: [],
    selectResponse: "stompy"
  })


  function handleChange(event) {
    const simpleValueSetFormItems = ["playerType", "firstName", "lastName", "passwrd"]
    if(simpleValueSetFormItems.includes(event.target.name)) {
      setFormObject((prevForm) => {
        return {
          ...prevForm,
          [event.target.name]: event.target.value
        }
      })
    }
    if(event.target.name === "soda") {
      setFormObject({
        ...formObject,
        soda: event.target.value
      })
    }
    if(event.target.name === "colors") {
      if(formObject.colors.includes(event.target.id)) {
        console.log("removing color")
        setFormObject({
          ...formObject, 
          colors: formObject.colors.filter((color) => {
          return color !== event.target.id;
        })})
      } else {
        console.log("adding color")
        setFormObject({
          ...formObject,
          colors: [...formObject.colors, event.target.id]
        })
      }
    }
  }

 
  function handleSubmit(evt) {
    evt.preventDefault();
    validateAll();
    if(!errorObject.firstName && !errorObject.passwrd) {
      // submit form
      console.log("whole form", formObject)
      console.log("error object", errorObject);
    }
    
  }
 const [errorObject, setErrorObject] = useState(
  {
    firstName: "",
    passwrd: ""
  }
 )
 function validateAll() {
  validateFirstName();
  validatePassword();
 }
 function validateFirstName() {
  if(!formObject.firstName) {
    setErrorObject((prevErrorObject) => {
      return {
        ...prevErrorObject,
        firstName: "this field is required"
      }
    })
  } else {
    setErrorObject((prevErrObj) => {
      return {
        ...prevErrObj,
        firstName: ""
      }
    })
  }
 }
 function validatePassword() {
  if(formObject.passwrd.length < 8) {
    // set error object
    setErrorObject((prevErrorObj) => {
      return {
        ...prevErrorObj,
        passwrd: "a password of at least 8 characters is required"
      }
    })
  } else {
    // clear error object
    setErrorObject((prevErrorObj) => {
      return {
        ...prevErrorObj,
        passwrd: ""
      }
    })
  }
 }

  return (
    <>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div>
            <label className="required" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"     
              type="text"
              name="firstName"
              value={formObject.firstName}
              onChange={handleChange}
              onBlur={() => {
                validateFirstName();
               
              }}
            />
            {errorObject.firstName && (
              <>
              <br />
              <span className='error'>{errorObject.firstName}</span>
              </>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formObject.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='required' htmlFor="passwrd">Password</label>
            <input
              type="password"
              name="passwrd"
              id="passwrd"
              value={formObject.passwrd}
              onChange={handleChange}
              onBlur={validatePassword}
            />
            {errorObject.passwrd && (
              <>
              <br />
              <span className='error'>{errorObject.passwrd}</span>
              </>
            )}
          </div>
          <div>
            <label htmlFor="likesPets">Likes Pets</label>
          <input 
            type="checkbox"
            name="likesPets"
            id="likesPets"
            checked={formObject.pets}
            value={formObject.pets}
            onChange={handleChange} 
          />
          </div>
        </fieldset>
        <fieldset>
          <legend>RadioGroup</legend>
          <div>
            <label htmlFor="pepsi"> Pepsi
              <input 
                type="radio" 
                name="soda" 
                id="pepsi" 
                value="pepsi" 
                onChange={handleChange}
                checked={formObject.soda === "pepsi"} 
                />
              </label>
            </div>
          <div>
            <label htmlFor="coke"> Coke
              <input 
                type="radio" 
                name="soda" 
                id="coke" 
                value="coke" 
                onChange={handleChange}
                checked={formObject.soda === "coke"} 
                />
              </label>
            </div>
          <div>
            <label htmlFor="mtnDew"> Moutain Dew
              <input 
                type="radio" 
                name="soda" 
                id="mtnDew" 
                value="mtnDew" 
                onChange={handleChange}
                checked={formObject.soda === "mtnDew"} 
                />
              </label>
            </div>
        </fieldset>
        <fieldset>
          <legend>Checkbox</legend>
          <label htmlFor="red"> Red
            <input
            type="checkbox"
            name="colors"
            id="red"
            value={formObject.colors.includes("red")}
            onChange={handleChange} 
            />
          </label>
          <label htmlFor="blue"> Blue
            <input 
              type="checkbox" 
              name="colors" 
              id="blue"
              value={formObject.colors.includes("blue")}
              onChange={handleChange} 
               />
          </label>
          <label htmlFor="green"> Green
            <input 
              type="checkbox"
              name="colors"
              id="green"
              value={formObject.colors.includes("green")}
              onChange={handleChange} 
              />
          </label>
          <label htmlFor="cyan"> Cyan
            <input 
              type="checkbox"
              name="colors" 
              id="cyan"
              value={formObject.colors.includes("cyan")}
              onChange={handleChange} 
                /></label>
        </fieldset>
        <fieldset>
          <legend>Select</legend>
          <select 
            name="playerType" 
            id="playerType" 
            onChange={handleChange}
            value={formObject.selectResponse}
            >
            {/* {selectOptions.map((option, index) => {
              return (<option 
                key={index}
                value={option.toLowerCase()} 
        
                >
                  {option}
                </option>)
            })} */}
            <option value="aggro">Aggro</option>
            <option value="control">Control</option>
            <option value="stompy">Stompy</option>
            <option value="mid-range">Mid Range</option>
          </select>
        </fieldset>
        <button 
          type="submit"
          disabled={errorObject.firstName || errorObject.passwrd}
        > Submit </button>
      </form>
    </>
  )
}

export default App
