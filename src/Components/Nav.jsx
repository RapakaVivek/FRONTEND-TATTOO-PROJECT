import React, { useState } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="nav">
        
        <div className="log">
          <h1>
            <img src="https://cdn.prod.website-files.com/63e146b13f318ece894576af/63e146b13f318e0daf457731_logo-header-tattooist-webflow-template.svg" />
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        <div className={`pages ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to='/home' activeClassName="active">
            <span>Home</span>
          </NavLink>
          <NavLink to='/design' activeClassName="active">
            <span>Designs</span>
          </NavLink>
          <NavLink to='/artists' activeClassName="active">
            <span>Artists</span>
          </NavLink>
          <NavLink to='/about' activeClassName="active">
            <span>About</span>
          </NavLink>
          <NavLink to='/bookings' activeClassName="active">
            <span>Bookings</span>
          </NavLink>
          <NavLink to='/contact' activeClassName="active">
            <span>Contact</span>
          </NavLink>
          <NavLink to='/cart' activeClassName="active">
            <span>Cart</span>
          </NavLink>
          <NavLink to='/profile' activeClassName="active">
            <span>Profile</span>
          </NavLink>
          <div className="sign">
            <NavLink to='/login'>
              <button>Sign In</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
