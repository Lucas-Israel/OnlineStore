import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class HeaderNav extends Component {
  render() {
    const { cart, categories } = this.props;
    const abc = cart.length > 0 && cart
      .map(({ orderQuantity }) => orderQuantity).reduce((a, b) => a + b);
    return (

      <ul className="nav">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link me-2 btn btn-dark text-white text-decoration-none"
          >
            Home
          </Link>
        </li>
        {categories
        && (
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link me-2 btn btn-dark text-white text-decoration-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#NavCategories"
            >
              Categories
            </Link>
          </li>)}
        <li className="nav-item">
          <Link
            to="/cart"
            className="btn btn-dark position-relative"
            data-testid="shopping-cart-button"
          >
            <i className="fa-solid fa-cart-shopping fa-lg mt-3" />
            <span
              className="position-absolute start-100 translate-middle badge bg-success"
              data-testid="shopping-cart-size"
            >
              {abc}
            </span>
          </Link>
        </li>
      </ul>

    );
  }
}

HeaderNav.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
  categories: PropTypes.bool,
};

HeaderNav.defaultProps = {
  categories: true,
};

export default HeaderNav;
