import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/error'
import Location from './pages/location'
import Header from './components/header'
import Footer from './components/footer'

ReactDOM.render(
  
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route exact path="/location/:id" element={<Location />}>
        </Route>
        <Route path="*" element={<Error />}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

