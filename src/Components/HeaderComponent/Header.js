import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo_1.png";
import "./Header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header-fill ${isSticky ? "sticky" : ""}`}>
      <div className="header-fill-bar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-div">
          <nav className="nav-options">
            <ul>
              <li className="selected">
                <Link to="/about">About Us</Link>
              </li>
              <li className="selected">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
