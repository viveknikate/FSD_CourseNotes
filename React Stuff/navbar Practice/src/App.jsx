import React, { Fragment } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Styling files
import './styles/index.css'
import './styles/Header.css'

//components files importing 
import Navigation from './components/Header';
import HomePage from './components/Home';
import AboutPage from './components/About';
import BlogPage from './components/Blog';
import ArticlePage from './components/Article';
import ContactPage from './components/Contact';  
import PPAGE from './components/Products';

function App() {
  return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Article/:artNums" element={<ArticlePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />}/>
          <Route path="/PRODUCTS/:pid" element={<PPAGE />} />
          <Route path="*" element={<h1 style={{color:'red'}}>Page Not Found 404</h1>} />
        </Routes>
      </Router> 
  );
}

export default App;
