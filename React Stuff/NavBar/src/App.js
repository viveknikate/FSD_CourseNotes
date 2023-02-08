
import React from 'react';
import './styles/Header.css';
import './styles/App.css';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Components/Header';       
import HomePage from './Components/Home';
import BlogPage from './Components/Blog';
import About from './Components/About';
import ContactPage from './Components/Contact';
import ProductName from './Components/Product'
import ArticlePage from './Components/Article';

export default function App() {
  return(
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/CONTACT' element={<ContactPage />} />
      <Route path='/AbOuT' element={<About />} />
      <Route path='/Blog' element={<BlogPage />} />
      <Route path='/product/:id' element={<ProductName />} />
      <Route path='/article/:ArtNum' element={<ArticlePage />} />
      <Route path='*' element={<h1 style={{color:'red'}} >Page not Found 404</h1>} />
    </Routes>
  </Router>
  );
}