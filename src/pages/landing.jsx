import React from "react";
import '../assets/landing.css';
import heroimg from '../assets/heroimg.png';
import shoe1 from '../assets/shoe1.png';
import shoe2 from '../assets/shoe2.png';
import shoe3 from '../assets/shoe3.png';
import shoe4 from '../assets/shoe4.png';
import shoe5 from '../assets/shoe5.png';
import shoe6 from '../assets/shoe6.png';
import shoe7 from '../assets/shoe7.png';
import shoe8 from '../assets/shoe8.png';
import shoe9 from '../assets/shoe9.png';
import shoe10 from '../assets/shoe10.png';
import shoe11 from '../assets/shoe11.png';
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

        <div className="shopNow">
          <div style={{textAlign: 'center'}}>
            <p>Shop Now, Turn Heads Later</p>
            <p>Don't wait to upgrade your wardrobe! Grab your favourites now and be ready to turn heads wherever you go</p>
          </div>

          <div className="shoe-section">
            <div className="shoe-filter">
              <img src={shoe1} alt="" />
            </div>

            <div className="shoe-list">
              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe3} alt="" />
                </div>
                <div className="card-1-body">
                  <p>K-swiss Sneakers 11</p>
                  <p>40 items left</p>
                  <p>$50,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe4} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Nike Black Sneakers</p>
                  <p>10 items left</p>
                  <p>$100,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe1} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Puma Train Snickers</p>
                  <p>5 items left</p>
                  <p>$150,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe5} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Nike Puma Sneakers</p>
                  <p>10 items left</p>
                  <p>$40,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe6} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Nike Sports Sneakers</p>
                  <p>5 items left</p>
                  <p>$70,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe7} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Nike Snickers 22</p>
                  <p>2 items left</p>
                  <p>$200,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe2} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Fashion Snickers 11</p>
                  <p>20 items left</p>
                  <p>$40,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe8} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Encap Sneakers N</p>
                  <p>7 items left</p>
                  <p>$350,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe9} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Fila Sneakers White</p>
                  <p>3 items left</p>
                  <p>$500,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe10} width={250} height={180} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Puma Sneakers</p>
                  <p>9 items left</p>
                  <p>$50,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe3} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Coloured Nike</p>
                  <p>2 items left</p>
                  <p>$50,000</p>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe3} alt="" />
                </div>
                <div className="card-1-body">
                  <p>K-swiss Sneakers 11</p>
                  <p>40 items left</p>
                  <p>$50,000</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <Footer />

      </div>
    );
};

export default Landing;