import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <div className="col-md-8">
            <h3> &copy; 2021 Jon Free </h3>
          </div>
          <div className="col-md-4 footerLink">
            <a href="https://www.linkedin.com/in/jonathon-free/" target="blank">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://github.com/freejonm" target="blank">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="mailto:freejonm@gmail.com" target="blank">
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;