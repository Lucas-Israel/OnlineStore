import React, { Component } from 'react';
import logo from '../assets/img/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <div
          className="row justify-content-center align-items-center py-3 my-4 border-top"
        >
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
              <img
                src={ logo }
                className="img-fluid"
                style={ { maxHeight: '30px' } }
                alt="logo"
              />
            </a>
            <span className="mb-3 mb-md-0 text-muted">&copy; Grupo 46 - Turma 23B</span>
          </div>
          <ul className="col-12 nav col-md-4 justify-content-center list-unstyled">
            <li className="ms-3"><i className="fa-brands fa-instagram fa-lg" /></li>
            <li className="ms-3"><i className="fa-brands fa-facebook fa-lg" /></li>
            <li className="ms-3"><i className="fa-brands fa-twitter fa-lg" /></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
