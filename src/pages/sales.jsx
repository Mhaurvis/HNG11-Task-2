import React from "react";
import '../assets/sales.css';
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
import salesHeadImg from '../assets/salesHeadImg.png';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Sales(){
    return(
        <div>
            <div className="salesHead">

                <Navbar />

                <div className="sales-head-section">
                    <div>
                        <p style={{fontSize: '36px', fontFamily: 'arial', fontWeight: 'bold'}}>Get a Free Gift Off Every Order</p>
                    </div>
                    <div>
                        <img src={salesHeadImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="shopNow">
                <div className="shoe-section">

                <div className="shoe-filter">
                <div>
                <h4>Filter</h4>
                <input type="checkbox" name="" id="" /> All
                <span>150</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" /> Male Shoes
                <span>50</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" /> Female Shoes
                <span>50</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" /> Children Shoes
                <span>50</span>
              </div>

              <h4>Price</h4>

              <div>
                <h4>Size</h4>
                <input type="checkbox" name="" id="" /> 06 - 20
                <span>20</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" /> 21 - 30
                <span>50</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" /> 31 - 40
                <span>40</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" /> 41 - 50
                <span>40</span>
              </div>

              <div>
                <h4>Filter</h4>
                <input type="checkbox" name="" id="" /> Nike
                <span>120</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" /> Puma
                <span>03</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" /> K-Swiss
                <span>01</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" /> Encap
                <span>01</span>
              </div>

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
                  <span className="fas fa-circle-plus"></span>
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
                  <span className="fas fa-circle-plus"></span>
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
                  <span className="fas fa-circle-plus"></span>
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
                  <span className="fas fa-circle-plus"></span>
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
                  <span className="fas fa-circle-plus"></span>
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
                  <span className="fas fa-circle-plus"></span>
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
                  <span className="fas fa-circle-plus"></span>
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
                  <span className="fas fa-circle-plus"></span>
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
                  <span className="fas fa-circle-plus"></span>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe3} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Puma Sneakers</p>
                  <p>9 items left</p>
                  <p>$50,000</p>
                  <span className="fas fa-circle-plus"></span>
                </div>
              </div>

              <div className="shoe-card-1">
                <div className="card-1-head">
                  <img src={shoe10} width={250} height={180} alt="" />
                </div>
                <div className="card-1-body">
                  <p>Coloured Nike</p>
                  <p>2 items left</p>
                  <p>$50,000</p>
                  <span className="fas fa-circle-plus"></span>
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
                  <span className="fas fa-circle-plus"></span>
                </div>
              </div>
                    </div>

                </div>

                <div className="prevNext" style={{textAlign: 'center'}}>
              <button>Previous</button><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>Next</button>
          </div>

            </div>

                <Footer />

        </div>
    )
}

export default Sales;