import clsx from "clsx";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
export function DeckDetail({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedDeck = data.find((deck) => deck.id === id);
    console.log("deck", selectedDeck);
    return (
        <>
        <Link to="/">Return to Deck List</Link>
            <h1>{selectedDeck.commander}</h1>
            <img src={selectedDeck.image} alt={selectedDeck.commander} />
            <p>
                Theme: {selectedDeck.theme}
            </p>
            {selectedDeck.hasWon && (<p>This deck is a winner</p>)}
            {selectedDeck.mainGroup && (<p>I usually take this deck with me whenever I play</p>)}
            {selectedDeck.colors.map((color) => {
                return (<div key={color} className={clsx(["colorBlock", color])}>{color}</div>)
            })}
        </>
        
    )
}
DeckDetail.propTypes = {
    data: PropTypes.array
 };