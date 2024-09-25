import React from 'react';
import './Footer.css';
import Group from '../../images/icons/Group 204.png';
import Group2 from '../../images/icons/Group 245.png';
import Group3 from '../../images/icons/Group 1133.png';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className=''>
           <div className="server">
           <h1>Whay You Choose Us</h1>
            <div className="grid1">
                <div className="card1"><img src={Group} alt="" /><h4>Fast Delevary</h4></div>
                <div className="card1"><img src={Group3} alt="" /><h4>A Good Auto Responser</h4></div>
                <div className="card1"><img src={Group2} alt="" /><h4>Home Delevary</h4></div>
            </div>
           </div>
           <div className="footer">
            <img src={logo} alt="" />
             <p>Copyrigth &copy; 2024 || Red Onion</p>
           </div>
        </div>
    );
};

export default Footer;