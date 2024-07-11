import React, { useState } from 'react';
import styled from 'styled-components';
import '../assets/nav.css';
import { NavLink } from "react-router-dom";

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


    return(
      <div className="nav-container">
       <nav>
         
            <button style={{backgroundColor: 'rgba(20, 27, 52, 1)'}} className='navbar-toggle' onClick={toggleNavbar}><span className='fa fa-bars'></span></button>
              <div className="navlinks">
                  <ul className={`navbar-menu ${isOpen ? 'active' :''}`}>
                      <a style={{fontSize: '36px', fontWeight: 'bold', paddingRight: '40px'}} href="/">FOOT FASHION</a>            
                      <li className='navbar-item'><NavLink to="/carts">CART</NavLink></li>
                      <li className='navbar-item'><NavLink to="/sales">SALES</NavLink></li>
                  </ul>
              </div>
              <div className='navFont'>
                  <span style={{paddingRight: '20px'}} className="fas fa-search"></span>
                  <span className="fas fa-cart-shopping"></span>
              </div>
          
       </nav>
      </div>
    )
};

export default Navbar;