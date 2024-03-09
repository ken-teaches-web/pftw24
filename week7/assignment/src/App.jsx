import "./App.css";
import { CommanderRow } from "./CommanderRow";

function App() {
  const commanderDecks = [
    {
      commander: "Alela, Cunning Conqueror",
      colors: ["blue", "green", "black"],
      theme: "Fairy typal",
      hasWon: true,
      mainGroup: true,
      image: "./alela-cunning-conqueror.png"
    },
    {
      commander: "Kaust, Eyes of the Glade",
      colors: ["green", "red", "white"],
      theme: "Face down creatures",
      hasWon: false,
      mainGroup: false,
      image: "./kaust-eyes-of-the-glade.png"
    },
    {
      commander: "Esix, Fractal Bloom",
      colors: ["blue", "gree"],
      theme: "token clones",
      hasWon: true,
      mainGroup: true,
      image: "./esix-fractal-bloom.png"
    },
    {
      commander: "Muldrotha, The Grave Tide",
      colors: ["blue", "green", "black"],
      theme: "Graveyard recursion",
      hasWon: false,
      mainGroup: false,
      image: "./muldrotha-the-gravetide.png"
    },
    {
      commander: "Braids, Arisen Nightmare",
      colors: ["black"],
      theme: "Sacrafice, life drain",
      hasWon: true,
      mainGroup: true,
      image: "./braids-arisen-nightmare.png"
    },
    {
      commander: "Breya, Etherium Shaper",
      colors: ["white", "black", "blue", "red"],
      theme: "Artifacts",
      hasWon: true,
      mainGroup: true,
      image: "./breya-etherium-shaper.png"
    },
  ];
  return (
    <>
      <h1>My Commander Collection</h1>
      <p>Show decks here</p>
      <table className="commander-table">
        <thead>
          <tr>
            <th>Commander Name</th>
            <th>Colors</th>
            <th>Has Won</th>
            <th>Usually take</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
        {commanderDecks.map((commander, index) => {
          console.log("commander", commander)
          return (
          <CommanderRow 
            key={commander.image}
            odd={index % 2 === 0}
            commander={commander.commander}
            colors={commander.colors}
            image={commander.image} 
            hasWon={commander.hasWon}
            mainGroup={commander.mainGroup}
            />
            )
        })}
        </tbody>
      </table>
    </>
  )
}

export default App;