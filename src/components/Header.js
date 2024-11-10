import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => (
  <header>
    <nav className='navbar'>
      <h1>Brisphere</h1>
      <div>
        <Link to="/" className='link'>Discover</Link>
        <Link to="/" className='link'>Services</Link>
        <Link to="/" className='link'>About Us</Link>
      </div>
    </nav>
  </header>
);

export default Header;
