import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  


  return (
    <div>
    <div className="App">
      <NavBar />
      
      <div className='bigcontainer'>
      
      <div className='topspace'>
        <section id="home" className="pageSection">
          <Home />
        </section>
        <section id="experience" className="pageSection">
          <Experience />
        </section>
        <section id="skills" className="pageSection">
          <Skills />
        </section>
        <section id="portfolio" className="pageSection">
          <Portfolio />
        </section>
        <section id="about" className="pageSection">
          <About />
        </section>
        <section id="contact" className="pageSection">
          <Contact />
        </section>
      </div>
      <div className='bottomspace'></div>
      </div>
      
    </div>
    
    </div>
  );
}

export default App;
