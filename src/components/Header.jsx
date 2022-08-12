import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/img/logo.png';
import HeaderNav from './HeaderNav';

class Header extends Component {
  render() {
    const { cart, categories } = this.props;
    return (
      <header className="container border-bottom">
        <div className="row justify-content-between my-3">
          <div className="col-2 col-sm-4 col-md-7 col-lg-9 align-items-center">
            <Link
              to="/"
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <img
                src={ logo }
                className="img-fluid me-2"
                alt="logo"
                style={ { maxHeight: '50px' } }
              />
              <span className="fs-4 bold">
                Store
              </span>
            </Link>
          </div>
          <div className="col-auto d-flex my-1">
            <HeaderNav cart={ cart } categories={ categories } />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
  categories: PropTypes.bool,
};

Header.defaultProps = {
  categories: true,
};

export default Header;
