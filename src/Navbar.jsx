import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <Link className='navbarLink' to="/">Home</Link>
            <Link className='navbarLink' to="/about">About</Link>
            
        </div>
    );
}

export default Navbar;
