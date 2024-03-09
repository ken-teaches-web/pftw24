import Header from "./Header"
import "./App.css"
function App() {
  // how to get data into html?
  // const myString = "Hello, World";
 const dogFact1 = "Dogs like to lick things";
 const dogFact2 = "Dogs are often furry";
 const dogFact3 = "Dogs need exercise";
 const dogConditionTrue = "Dogs like to drive cars";
 const dogConditionFalse = "Dogs like to ride in cars";
 const dogLikes = "car ride";
  // ternerary -- one line conditional statement
  // left side define or return variable
  // right you 
  // condition ? true : false;
  return (
    <div>
      <Header something="foo"></Header>
     <h1> Hi</h1>
     <ul>
      <li>{dogFact1}</li>
      <li>{dogFact2}</li>
      <li>{dogFact3}</li>
      <li>
        {dogLikes !== "car ride" ? (<>{dogConditionTrue}</>) :(<>{dogConditionFalse}</>)}
      </li>
     </ul>
     <br />
     
    </div>
  )
}

export default App
