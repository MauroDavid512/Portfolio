import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

import { Route, Routes } from 'react-router-dom';

function App() {

  


  return (
    <div>
    <div className="App">
      <NavBar />
      
      <div className='bigcontainer'>
      
      <div className='topspace'>
      <Routes>
        <Route exact path='/' element={<div><Home/></div>}/>
        <Route path='/about' element={<div><About/></div>}/>
        <Route path='/experience' element={<div><Experience/></div>}/>
        <Route path='/portfolio' element={<div><Portfolio/></div>}/>
        <Route path='/Skills' element={<div><Skills/></div>}/>
      </Routes>
      </div>
      <div className='bottomspace'></div>
      </div>
      
    </div>
    
    </div>
  );
}

export default App;
