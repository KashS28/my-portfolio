import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            Kashish Shah
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><a href="https://linkedin.com/in/kashish-shah-2804" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://medium.com/@ctrlaltthrive" target="_blank" rel="noreferrer">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}