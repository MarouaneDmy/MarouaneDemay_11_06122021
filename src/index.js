import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/error'
import Logement from './pages/logement'
import Header from './components/header'

ReactDOM.render(
  
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/logement" element={<Logement />}>
        </Route>
        <Route path="*" element={<Error />}>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

