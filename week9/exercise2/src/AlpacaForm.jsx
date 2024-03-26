import { useState } from "react";
import "./AlpacaForm.css";

export function AlpacaForm () {
    const intitalFormData = {
        firstName: "",
        lastName: "",
        street: "",
        state: "Idaho",
        country: "",
        colors: []
      }
    const states = [
        "Alaska",
        "Alabama",
        "Arkansas",
        "American Samoa",
        "Arizona",
        "California",
        "Colorado",
        "Connecticut",
        "District ",
        "of Columbia",
        "Delaware",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Iowa",
        "Idaho",
        "Illinois",
        "Indiana",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Massachusetts",
        "Maryland",
        "Maine",
        "Michigan",
        "Minnesota",
        "Missouri",
        "Mississippi",
        "Montana",
        "North Carolina",
        "North Dakota",
        "Nebraska",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "Nevada",
        "New York",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Virginia",
        "Virgin Islands",
        "Vermont",
        "Washington",
        "Wisconsin",
        "West Virginia",
        "Wyoming"
    ];
    const [errorObject, setErrorObject] = useState({
      firstName: "",
      country: ""
    })
    function validateErrors() {
      if(!formObject.firstName){
        setErrorObject({
          ...errorObject,
          firstName: "This field is required"
        })
      } else {
        setErrorObject({
          ...errorObject,
          firstName: "This field is required"
        })
      }
      
    }
      
      const [formObject, setFormObject] = useState(intitalFormData);
      function changeHandler(event) {
        console.log(event.target.value);
        if(event.target.name === "colors") {
          const colorName = event.target.id;
          if(formObject.colors.includes(colorName)) {
            setFormObject({
              ...formObject,
              colors: formObject.colors.filter((color) => color !== colorName)
            })
          } else {
            setFormObject({
              ...formObject,
              colors: [...formObject.colors, colorName]
            })
          }
        } else {
        setFormObject((previousForm) => {
          console.log(event.target.name)
    
          return {
            ...previousForm,
            [event.target.name]: event.target.value
          }
    
        })
      
      }
    }
      function handleSubmit(event) {
        console.log("submit triggered")
        event.preventDefault();
        console.log("the whole form object", formObject)
    
      }
    return (
        <>
              <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="formgroup">
            <label htmlFor="firstName" className="required">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formObject.firstName}
              onChange={changeHandler}
              onBlur={validateErrors}
            />
            {errorObject.firstName && (
              <>
                <br />
                <small>{errorObject.firstName}</small>
              </>
            )}
          </div>
          <div className="formgroup">
            <label htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formObject.lastName}
              onChange={changeHandler}
            />
          </div>
          <div className="formgroup">
            <label htmlFor="street">
              Street Address
            </label>
            <input
              type="text"
              name="street"
              id="street"
              value={formObject.street}
              onChange={changeHandler}
            />
          </div>
          <div className="formgroup">
            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              value={formObject.state}
              onChange={changeHandler}
            >
              {states.map((singleState, index) => {
                return (
                    <option key={index} value={singleState}>{singleState}</option>
                )
              })}
            </select>
          </div>
          <div className="formgroup">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              value={formObject.country}
              onChange={changeHandler}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Tell us about your Alpaca interests!</legend>
          <p>Favorite alpaca colors</p>
          <div className="formgroup">
            <label htmlFor="brown">
              Brown
              <input 
                type="checkbox" 
                name="colors" 
                id="brown"
                checked={formObject.colors.includes("brown")}
                onChange={changeHandler}
                 />
            </label>

            <label htmlFor="black">
              Black
              <input type="checkbox"
                name="colors" 
                id="black"
                checked={formObject.colors.includes("black")}
                onChange={changeHandler}
                />
            </label>
            <label htmlFor="beige">
              Beige
              <input
                type="checkbox"
                name="colors"
                id="beige"
                checked={formObject.colors.includes("beige")}
                onChange={changeHandler} />
            </label>
            <label htmlFor="pinto">
              Pinto
              <input
                type="checkbox"
                name="colors"
                id="pinto"
                checked={formObject.colors.includes("pinto")}
                onChange={changeHandler} 
                />
            </label>
          </div>
        </fieldset>
        <button type="submit" disabled={errorObject.firstName || errorObject.country}>
          Sign me up
        </button>
      </form>
        </>
    )
}