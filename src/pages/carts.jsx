import React from "react";
import '../assets/carts.css';
import shoe5 from '../assets/shoe5.png';
import shoe1 from '../assets/shoe1.png';
import shoe3 from '../assets/shoe3.png';
import shoe10 from '../assets/shoe10.png';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Carts(){
    return(
        <div className="cartMain">
            <Navbar />

            <div>
               <p><span className="fas fa-caret-left"></span> Continue Shopping</p>

                <div className="carttext" >
                    <p style={{textAlign: 'center', fontSize: '2.3em', fontWeight: 'bold', fontFamily: 'arial'}}>My Carts <span style={{color: 'gray'}}>(3 items)</span></p>
                </div>
            </div>

            <div className="cartsection">
                <div>
                    <div>
                        <div>
                            <img src={shoe5} alt="" />
                            <p>Nike Puma Sneakers</p>
                            <span>Black lasted edition</span>
                            <div>
                                <div>Size</div>
                                <div>2</div>
                            </div>
                        </div>
                        <div>2</div>
                    </div>
                    <div>
                        <img src={shoe1} alt="" />
                    </div>
                    <div>
                        <img src={shoe3} alt="" />
                    </div>
                    <div>
                        <img src={shoe10} width={243} height={180} alt="" />
                    </div>
                </div>
                <div>2</div>
            </div>

            <Footer />

        </div>
    )
}

export default Carts;