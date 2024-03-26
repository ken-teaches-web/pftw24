import { useState } from "react";
import PropTypes from "prop-types";
import "./NewCommanderForm.css";
// import clsx from "clsx";
export function NewCommanderForm({addCardFn}) {
    const initialCardSetting = {
        commander: "",
        colors: [],
        theme: "",
        hasWon: false,
        mainGroup: false,
        image: ""
    };
    const [newCard, setNewCard] = useState(initialCardSetting);
    const [errorObj, setErrorObj] = useState({
        commander: "",
        image: "",
        colors: ""
    });

    function validateForm(newCard) {
        console.log("triggering validation", !!newCard.commander)
        let valid = true;
        if(!newCard.commander) {
            console.log("setting error object")
            // set error Obj commander prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    commander: "The Commander Field is required"
                }
            });
            valid = false;
        }
        if(!newCard.image) {
            // set image prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    image: "The image field is required"
                }
            });
            valid = false;
        }
        if(newCard.colors.length === 0) {
            // set color message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    colors: "You must choose at least one color"
                }
            });
            valid = false;
        }
        console.log(valid)
        return valid;
    }


    function changeHandler(event) {
        console.log(event.target.value)
        if (event.target.name === "colors") {
            // figure out what color to add or remove
            const newColor = event.target.id;
            if (newCard.colors.includes(newColor)) {
                const filteredArray = newCard.colors.filter((color) => {
                    return color !== newColor
                })
                setNewCard((prevCard) => {
                    return {
                        ...prevCard,
                        colors: filteredArray
                    }
                })
            } else {
                // we need add the color
                const addedColors = [...newCard.colors, newColor];
                setNewCard((prevCard) => {
                    return {
                        ...prevCard,
                        colors: addedColors
                    }
                })
            }
        } else {
            const needsBoolean = ["hasWon", "mainGroup"];
            const updatedTarget = needsBoolean.includes(event.target.id) ? !!event.target.value : event.target.value;

            setNewCard((prevCard) => {
                return {
                    ...prevCard,
                    [event.target.name]: updatedTarget
                }
            })
        }
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log({ newCard });
        if(validateForm(newCard)) {
            // send card to App
            addCardFn(newCard);
            // reset values
            setNewCard(initialCardSetting)
        }
    }

    return (
        <form className="new-commander-form-wrapper" onSubmit={submitHandler}>
            <fieldset>
                <legend>Commander Details</legend>
                <div className={{"form-group": true, "error": errorObj.commander}}>
                    <label className="required" htmlFor="commander">Commander Name</label>
                    <input
                        type="text"
                        name="commander"
                        id="commander"
                        value={newCard.commander}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newCard.commander) {
                                setErrorObj((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        commander: ""
                                    }
                                })
                            }
                        }}
                    />
                   {errorObj.commander && (
                    <>
                        <br />
                        <small className="errorFeedback">{errorObj.commander}</small>
                    </>
                   )}
                </div>
                <div className="formgroup">
                    <label htmlFor="theme">Theme</label>
                    <input
                        type="text"
                        name="theme"
                        id="theme"
                        onChange={changeHandler}
                        value={newCard.theme}
                    />
                </div>
                <div className={{"form-group": true, "error": errorObj.image}}>
                    <label className="required" htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        onChange={changeHandler}
                        value={newCard.image}
                        onBlur={() => {
                            if(newCard.image) {
                                setErrorObj((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        image: ""
                                    }
                                })
                            }
                        }}
                    />
                     {errorObj.image && (
                    <>
                        <br />
                        <small className="errorFeedback">{errorObj.image}</small>
                    </>
                   )}
                </div>
                <fieldset>
                    <legend className="required">Color Identity</legend>
                    {errorObj.colors && (
                    <>
                        <small className="errorFeedback">{errorObj.colors}</small>
                    </>
                   )}
                    <div className="formGroup checkbox-group">
                        <label htmlFor="white">White
                            <input type="checkbox" name="colors" id="white"
                                onChange={changeHandler}
                                checked={newCard.colors.includes("white")}
                                onBlur={() => {

                                    if(newCard.colors.length > 0) {
                                        console.log("setting colors")
                                        setErrorObj((prevErrorObj) => {
                                            return {
                                                ...prevErrorObj,
                                                colors: ""
                                            }
                                        }) 
                                    }
                                }}
                                />
                        </label>
                        <label htmlFor="blue">Blue
                            <input type="checkbox" name="colors" id="blue"
                                onChange={changeHandler}
                                checked={newCard.colors.includes("blue")}
                                onBlur={() => {
                                    if(newCard.colors.length > 0) {
                                        setErrorObj({
                                            ...errorObj,
                                            colors: ""
                                        })
                                    }
                                }}
                            />
                        </label>
                        <label htmlFor="black">Black
                            <input type="checkbox" name="colors" id="black"
                                onChange={changeHandler}
                                checked={newCard.colors.includes("black")}
                                onBlur={() => {
                                    if(newCard.colors.length > 0) {
                                        setErrorObj({
                                            ...errorObj,
                                            colors: ""
                                        })
                                    }
                                }}
                            />
                        </label>
                        <label htmlFor="red">Red
                            <input type="checkbox" name="colors" id="red"
                                onChange={changeHandler}
                                checked={newCard.colors.includes("red")}
                                onBlur={() => {
                                    if(newCard.colors.length > 0) {
                                        setErrorObj({
                                            ...errorObj,
                                            colors: ""
                                        })
                                    }
                                }}
                            />
                        </label>
                        <label htmlFor="green">Green
                            <input type="checkbox" name="colors" id="green"
                                onChange={changeHandler}
                                checked={newCard.colors.includes("green")}
                                onBlur={() => {
                                    if(newCard.colors.length > 0) {
                                        setErrorObj({
                                            ...errorObj,
                                            colors: ""
                                        })
                                    }
                                }}
                            />
                        </label>
                    </div>
                </fieldset>
            </fieldset>
            <fieldset>
                <legend>Collection Details</legend>
                <div className="form-group">
                    <label htmlFor="hasWon">This Deck has has won</label>
                    <input type="checkbox" name="hasWon" id="hasWon" onChange={changeHandler}
                        value={newCard.hasWon} />
                </div>
                <div className="form-group">
                    <label htmlFor="mainGroup">This Deck is included in the travel bag</label>
                    <input type="checkbox" name="mainGroup" id="mainGroup" onChange={changeHandler}
                        value={newCard.mainGroup} />
                </div>
            </fieldset>
            <button type="submit" disabled={errorObj.commander || errorObj.colors || errorObj.image}>
                Add Commander
            </button>
        </form>
    )
}

NewCommanderForm.propTypes = {
    addCardFn: PropTypes.func.isRequired
}