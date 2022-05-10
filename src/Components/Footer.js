import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <img src='https://www.proffus.com/wp-content/uploads/2020/11/logo1.png' alt='' className='footer-logo-img'></img>
        <div className='footer-buttons'>
            <div className='footer-blocks'>
                <p className='footer-p'>Support</p>
                <p className='footer-p'>About Us</p>
                <p className='footer-p'>Privacy Policy</p>
                
            </div>
            <div className='footer-blocks'>
                <p className='footer-p'>Terms & Conditions</p>
                <p className='footer-p'>Return & Refund Policy</p>
                <p className='footer-p'>Shipping & Delivery Policy</p>
            </div>
        </div>
        <div className='footer-copyright'>
            <p className='footer-p'>Diwakar Singh | All Rights Reserved | 2022 Copyright</p>
        </div>
    </div>
  );
}

export default Footer;
