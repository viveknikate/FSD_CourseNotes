import React from "react";
import {Link} from 'react-router-dom';
import '../styles/Header.scss';

const Header = () =>{
    return(
        <nav>
            <h1>WebSite</h1>
            <main>
                <Link to="/">Home</Link>    
                <Link to="/blog">Blogs</Link>
                <Link to="/about">AboutUS</Link>
                <Link to="/contact">ContactUS</Link>
                <Link to="/article">Articles</Link>
            </main>
        </nav>
    );
}

export default Header;