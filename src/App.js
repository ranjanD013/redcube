// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
// import {BrowserRouter, Switch, Route } from 'react-router-dom';
// import {BrowserRouter, Switch,  Route,  } from 'react-router-dom';

import './Utility/style.css'
function App() {
  return (
    <>    
  
   
   
  

<BrowserRouter>  
<Navigation />           
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />         
          <Route exact path="/contact" element={<Contact/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

<Home />
export default App;
