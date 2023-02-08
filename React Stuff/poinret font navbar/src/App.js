import './styles/App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/Home';
import BlogPage from './components/Blog';
import AboutPage from './components/About';
import ArticlePage from './components/Article';
import ContactPage from './components/Contact';
import BlognumPage from './components/Blognum';
import ArticleIDPage from './components/ArticleId.jsx';

import CustomNavigator from './components/Header';

function App() {
  return (
    <Router>
      <CustomNavigator />
      <br />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:num' element={<BlognumPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/article' element={<ArticlePage />} />
        <Route path='/article/:id' element={<ArticleIDPage />} />
        <Route path='*' element={<h1 style={{color:"red"}}>Page Not Found 404..!</h1>} />
      </Routes>
    </Router>    
  );
}

export default App;
