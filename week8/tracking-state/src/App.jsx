import './App.css'
import {useState} from "react";

function App() {
 const [scroreObj, setScoreObj] = useState({left: 0, right: 0})
function incrementRightScore () {
  const newScore = {
    left: scroreObj.left,
    right: scroreObj.right + 1
  }
  setScoreObj(newScore);
}
  return (
    <>
    <h1>Solitare clicky game</h1>
    <div>
      left
      <button onClick={() => {
        setScoreObj({...scroreObj, left: scroreObj.left + 1});
      }}>Push me</button>
    </div>
    <div>
      right
      <button onClick={incrementRightScore}>No Push Me</button>
      </div>
      <div>
        <h2>Scores</h2>
        Left Score {scroreObj.left} | Right Score {scroreObj.right}
      </div>
    </>
  )
}

export default App
