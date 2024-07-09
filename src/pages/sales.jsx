import React from "react";
import '../assets/sales.css';
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

                    <div className="s"></div>

                </div>
            </div>

                <Footer />

        </div>
    )
}

export default Sales;