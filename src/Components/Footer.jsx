import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div className="footer">
       
        <div className="footer-logo">
          <h1>Tattoo Design</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
        </div>

    
        <div className="footer-pages">
          <Link to='/home'><h1>Home</h1></Link>
          <Link to='/design'><h1>Designs</h1></Link>
          <Link to='/Artists'><h1>Artists</h1></Link>
          <Link to='/bookings'><h1>Bookings</h1></Link>
          <Link to='/Profile'><h1>Profile</h1></Link>
        </div>

    
        <div className="footer-location">
          <h1>Location</h1>
          <div className="location-item">
            <p><FaMapMarkerAlt size={20} />   123 Tattoo Street, Ink City, USA</p>
          </div>
          <div className="location-item">
            <p><FaPhoneAlt size={20} />     Phone: (123) 456-7890</p>
          </div>
          <div className="location-item">
            <p><FaEnvelope size={20} />    Email: contact@tattoodesign.com</p>
          </div>
        </div>


      
        <div className="footer-social">
          <h1>Follow Us</h1>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Footer;



