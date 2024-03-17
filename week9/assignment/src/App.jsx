import { useState } from 'react'

import './App.css';
import Masthead from './Masthead/Masthead';
import ItemCard from './ItemCard/ItemCard';
import {nanoid} from "nanoid";
import { NewCommanderForm } from './NewCommanderForm/NewCommanderForm';

function App() {
  const [decks, setDecks] = useState([
    {
      commander: "Alela, Cunning Conqueror",
      colors: ["blue", "black"],
      theme: "Fairy typal",
      hasWon: true,
      mainGroup: true,
      image: "./alela-cunning-conqueror.png",
      id: "1",
      format: "casual"
    },
    {
      commander: "Kaust, Eyes of the Glade",
      colors: ["green", "red", "white"],
      theme: "Face down creatures",
      hasWon: false,
      mainGroup: false,
      image: "./kaust-eyes-of-the-glade.png",
      id: "2",
      format: "casual"
    },
    {
      commander: "Esix, Fractal Bloom",
      colors: ["blue", "green"],
      theme: "token clones",
      hasWon: true,
      mainGroup: true,
      image: "./esix-fractal-bloom.png",
      id: "3",
      format: "casual"
    },
    {
      commander: "Muldrotha, The Grave Tide",
      colors: ["blue", "green", "black"],
      theme: "Graveyard recursion",
      hasWon: false,
      mainGroup: false,
      image: "./muldrotha-the-gravetide.png",
      id: "4",
      format: "casual"
    },
    {
      commander: "Braids, Arisen Nightmare",
      colors: ["black"],
      theme: "Sacrafice, life drain",
      hasWon: true,
      mainGroup: true,
      image: "./braids-arisen-nightmare.png",
      id: "5",
      format: "casual"
    },
    {
      commander: "Breya, Etherium Shaper",
      colors: ["white", "black", "blue", "red"],
      theme: "Artifacts",
      hasWon: true,
      mainGroup: true,
      image: "./breya-etherium-shaper.png",
      id: "6",
      format: "casual"
    },
    {
      commander: "Freyalise, Lloanowar's Fury",
      colors: ["green"],
      theme: "Elf typal",
      hasWon: false,
      mainGroup: false,
      image: "./freyalise-llanowar-s-fury.png",
      id: "7",
      format: "casual"
    }
  ]);
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
  const updatedDeck = {...matchingDeck, id: nanoid()};
  setDecks([...decks, updatedDeck]);
}
function addCard(newCardObject) {
  setDecks((previousDecks) => {
    return [...previousDecks, newCardObject];
  })
}


  return (
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
      <hr />
      <NewCommanderForm addCardFn={addCard} />
    </div>
  )
}

export default App
