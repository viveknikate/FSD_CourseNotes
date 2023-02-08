import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/PRODUCT/id">Products</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/ARTICLE/art">Article</Link>
      </nav>
  )
}

export default Header;
