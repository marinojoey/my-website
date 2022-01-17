import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro"
import Portfolio from "./Components/portfolio/Portfolio"
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import './app.scss'
import "./global.scss";
import { useState } from 'react';
import Menu from "./Components/menu.jsx/Menu"

function App() { 
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
