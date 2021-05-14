import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container mb-0">
    <nav className="navbar fixed-top navbar-expand-lg navbar-custom">
      <h2 className="navbar-brand">Jon Free</h2>
      <div>
        <a href="https://www.linkedin.com/in/jonathon-free/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fa-sm"></i></a>  
        <a href="https://github.com/freejonm" target="_blank" rel="noreferrer"><i className="fab fa-github fa-xs"></i></a>
        <a href="mailto:freejonm@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope fa-sm"></i></a>
      </div>
      <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/contact">Contact</Link >
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
}

export default Header;