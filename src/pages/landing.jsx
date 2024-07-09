import React from "react";
import '../assets/landing.css';
import heroimg from '../assets/heroimg.png';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Landing(){
    return(
      <div className="main">
        <Navbar />

        <div className="header">
          <div>
            <p>Step Lightly</p>
            <p style={{fontSize: '50px', fontWeight: '600'}}>Nice Shoes that Reflect Your Personality</p>
            <p>Step lightly: sustainable footwear for every step. Discover stylish and comfortable shoes</p>
            <button>Shop now <span className="fas fa-circle-arrow-right"></span></button>
          </div>
          <div>
            <img src={heroimg} alt="" />
          </div>
        </div>

       
        <div className="section-slide">
            <div>
              <span className="fas fa-truck"></span>
              <p>FAST & FREE SHIPPING <br /> on over 10,000 worth</p>
            </div>
            <div>
            <span className="fas fa-dollar-sign"></span>
            <p>CHEAP & EXCLUSIVE RATES <br /> on over 10,000 worth</p>
            </div>
            <div>
            <span className="fas fa-gift"></span>
            <p>FAST & FREE SHIPPING <br /> on over 10,000 worth</p>
            </div>
            <div>
            <span className="fas fa-truck"></span>
            <p>FAST & FREE SHIPPING <br /> on over 10,000 worth</p>
            </div>
        </div>

        <div className="deals">
          <div className="deals-top">
            <p style={{fontSize: '25px', fontWeight: 'bold', fontFamily: 'arial'}}>Todays Best Deals!</p>
            <button>Ends in 12h: 10m: 10s</button>
          </div>
          <div></div>
        </div>
        
        <Footer />

      </div>
    );
};

export default Landing;