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
       <nav>
            <div className="navlinks">
                <ul>
                    <a style={{fontSize: '36px', fontWeight: 'bold', paddingRight: '40px'}} href="/">FOOT FASHION</a>            
                    <li><NavLink to="/carts">CART</NavLink></li>
                    <li><NavLink to="/sales">SALES</NavLink></li>
                </ul>
            </div>
            <div className='navFont'>
                <span style={{paddingRight: '20px'}} className="fas fa-search"></span>
                <span className="fas fa-cart-shopping"></span>
            </div>
       </nav>
    )
};

export default Navbar;