import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Login from './seiten/Login';
import Zeiterfassung from './seiten/Zeiterfassung';
import Hilfe from './seiten/Hilfe';
import Einstellungen from './seiten/Einstellungen';
import Header from './container/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/zeiterfassung' element={<Zeiterfassung />} />
          <Route exact path='/hilfe' element={<Hilfe />} />
          <Route exact path='/einstellungen' element={<Einstellungen />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
  
}

export default App;