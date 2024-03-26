import { NavLink, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home';
import { Llamas } from './views/Llamas';
import './App.css'
import { Alpaca } from './views/Alpaca';

function App() {
 

  return (
   <>
   {/* Navigation here */}
   <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/llamas">Llamas</NavLink></li>
    <li><NavLink to="/alpacas">Alpacas</NavLink></li>
   </ul>
   {/* Routes here */}
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/llamas" element={<Llamas />} />
      <Route path="/alpacas" element={<Alpaca />} />
   </Routes>
   </>
  )
}

export default App
