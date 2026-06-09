import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-obsidian">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <h2 className="footer-logo">Aurelia Coast Resort</h2>
          <p className="footer-desc">
            Experience unparalleled luxury and tranquility where the ocean meets refined elegance.
          </p>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><Link to="/villas">Villas & Suites</Link></li>
            <li><Link to="/experiences">Experiences</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li><MapPin size={18}/> 123 Paradise Cove, Coastal Riviera</li>
            <li><Phone size={18}/> +1 (555) 123-4567</li>
            <li><Mail size={18}/> reserve@aureliacoast.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Subscribe for exclusive offers and updates.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit" className="btn btn-outline-gold">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} Aurelia Coast Resort. All rights reserved.</p>
          <p className="arass-branding">Template by ARASS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
