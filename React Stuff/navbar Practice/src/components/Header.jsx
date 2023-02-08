import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/ARTICLE/arts">Article</Link>
            <Link to="/About">AboutUS</Link>
            <Link to="/Contact">ContactUS</Link>
            <Link to="/Products/pID">Products</Link>
        </nav>
    );
}
export default Header;
