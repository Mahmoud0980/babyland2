import React from "react";
import { FaHeart } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand-section">
          <h2 className="brand-name">بيبي لاند</h2>
          <p className="brand-slogan">"فرصة ليتألق طفلك كل يوم"</p>
        </div>
        
        <div className="copyright">
          <p>
            صنع بكل <FaHeart className="heart-icon" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;