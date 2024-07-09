import React from "react";
import '../assets/footer.css';

function Footer(){
    return(
        <div className="footer">
            <div>
                <p style={{fontSize: '36px', fontWeight: 'bold', fontFamily: 'Arial'}}>FOOT FASHION</p>
                <p>Sustainable footwear for every step. Discover <br /> stylish and comfortable shoes</p>
                <span style={{paddingRight: '10px'}} className="fab fa-instagram fa-2x"></span><span className="fab fa-twitter fa-2x"></span>
            </div>
            
            <div className="footSide">
                <div>
                    <p style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'arial'}}>Product</p>
                    <p>Shop</p>
                    <p>Sales</p>
                </div>
                <div>
                    <p style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'arial'}}>Contact</p>
                    <p><span className="fas fa-user"></span> footfashion@gmail.com</p>
                    <p><span className="fa fa-phone"></span> +234 802 3456 678</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;