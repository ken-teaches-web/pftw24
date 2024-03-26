import { useState } from "react";
import { nanoid } from "nanoid";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";

import { NewCommanderForm } from "../NewCommanderForm/NewCommanderForm";
import deckData from "../assets/deck-data.json"
export function Home() {
    const [decks, setDecks] = useState(deckData);

function deleteCard(id) {
  console.log("delete me", id);
  const updatedArray = decks.filter((commanderDeck) => {
    return commanderDeck.id !== id; // will skip item with matching id
  })
  setDecks(updatedArray)
}
function duplicateCard(id) {
  console.log("duplicate me", id)
  const matchingDeck = decks.find((commanderDeck) => {
    return commanderDeck.id === id
  });
  const updatedDeck = {...matchingDeck, id: nanoid()}
  setDecks([...decks, updatedDeck]);
}

return(
    <div className="page">
    {/* Masthead goes here */}
    <Masthead />
    <div className="collection">
      {/* deck map goes here */}
      {/* use ItemCard component in loop */}
      {decks.map((commanderDeck) => {
        return (
          <ItemCard 
            key={commanderDeck.id} 
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...commanderDeck} />
        )
      })}
    </div>
  </div>
);
}