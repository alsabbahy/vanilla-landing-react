import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__content">
        <ul className="nav">
          <li className="nav-item"><a className="nav-link" href="#home">Intro</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#our-story">Our Story</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact-us">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
