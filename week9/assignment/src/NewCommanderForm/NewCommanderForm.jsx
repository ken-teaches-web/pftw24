import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./NewCommander.css";
export function NewCommanderForm({ addCardFn }) {
    const formIntialValue = {
        commander: "",
        colors: [],
        theme: "",
        hasWon: false,
        mainGroup: false,
        image: "",
        format: "casual"
    };
    const [newCard, setNewCard] = useState(formIntialValue);
    function handleChange(event) {
        console.log("event", event.target.name);
        const normalProps = ["commander", "theme", "image", "hasWon", "mainGroup", "format"]
        const convertToBool = ["hasWon", "mainGroup"]
        if (normalProps.includes(event.target.name)) {
            setNewCard((previousCardObj) => {
                return {
                    ...previousCardObj,
                    [event.target.name]: convertToBool.includes(event.target.name) ? !previousCardObj[event.target.name] : event.target.value
                }
            })
        }
        if (event.target.name === "colors") {
            console.log(event.target.checked, event.target.value, event.target.id)
            if (newCard.colors.includes(event.target.id)) {
                const filteredColors = newCard.colors.filter((color) => color !== event.target.id);
                setNewCard((prevCard) => {
                    return {
                        ...prevCard,
                        colors: filteredColors
                    }
                })
            } else {
                setNewCard((prevCard) => {
                    return {
                        ...prevCard,
                        colors: [...prevCard.colors, event.target.id]
                    }
                })
            }
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(newCard);
        addCardFn(newCard);
        setNewCard(formIntialValue);
    }
    const formOptions = ["casual", "competitive"];
    useEffect(() => {
        console.log({newCard})
    }, [newCard])
    return (
        <form className="new-commander-form-wrapper" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Commander Details</legend>
                <div className="form-group text">
                    <label htmlFor="commander">Commander Name</label>
                    <input onChange={handleChange} value={newCard.commander} type="text" name="commander" id="commander" />
                </div>
                <div className="form-group text">
                    <label htmlFor="theme">Theme</label>
                    <input value={newCard.theme} onChange={handleChange} type="text" name="theme" id="theme" />
                </div>
                <div className="form-group text">
                    <label htmlFor="image">Image Url</label>
                    <input value={newCard.image} onChange={handleChange} type="text" name="image" id="image" />
                </div>
                <div className="form-group checkbox-group">
                    <fieldset>
                        <legend>Colors</legend>
                        <label htmlFor="white"> White
                            <input onChange={handleChange} type="checkbox" value={newCard.colors.includes("white")} name="colors" id="white" checked={newCard.colors.includes("white")} />
                        </label>
                        <label htmlFor="blue"> Blue
                            <input onChange={handleChange} type="checkbox" value={newCard.colors.includes("blue")} name="colors" id="blue" checked={newCard.colors.includes("blue")} />
                        </label>
                        <label htmlFor="black"> Black
                            <input onChange={handleChange} type="checkbox" value={newCard.colors.includes("black")} name="colors" id="black" checked={newCard.colors.includes("black")} />
                        </label>
                        <label htmlFor="red"> Red
                            <input onChange={handleChange} type="checkbox" value={newCard.colors.includes("red")} name="colors" id="red" checked={newCard.colors.includes("red")} />
                        </label>
                        <label htmlFor="green"> Green
                            <input onChange={handleChange} type="checkbox" value={newCard.colors.includes("green")} name="colors" id="green" checked={newCard.colors.includes("green")} />
                        </label>
                    </fieldset>
                </div>
            </fieldset>
            <fieldset>
                <legend>Collection Details</legend>
                <div className="form-group single-check"><label htmlFor="hasWon">Deck has won a game</label><input onChange={handleChange} type="checkbox" name="hasWon" id="hasWon" value={newCard.hasWon} /></div>
                <div className="form-group single-check"><label htmlFor="mainGroup">Deck should be a regular include</label><input onChange={handleChange} type="checkbox" name="mainGroup" id="mainGroup" value={newCard.mainGroup} /></div>
                <div className="form-group select"><label htmlFor="format">Format</label>
                    <select name="format" id="format">
                        {formOptions.map((option, idx) => {
                            return (<option value={option} key={idx}>{option}</option>)
                        })}

                    </select>
                </div>
            </fieldset>
            <button type="submit">
                Add Commander
            </button>
        </form>
    )
}

NewCommanderForm.propTypes = {
    addCardFn: PropTypes.func.isRequired
}