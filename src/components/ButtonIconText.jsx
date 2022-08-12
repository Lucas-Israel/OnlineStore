import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ButtonIconText extends React.Component {
  render() {
    const { icon, text, classStyle, handlerAddToCart, product, dataTestId } = this.props;
    if (dataTestId === 'product-detail-link') {
      return (
        <Link to="/detalhes">
          <button
            data-testid="abc"
            type="button"
            className={ `btn btn-${classStyle} my-1 mx-1` }
          >
            <i className={ `${icon} me-2` } />
            { text }
          </button>
        </Link>
      );
    }
    return (
      <button
        data-testid={ dataTestId }
        type="button"
        className={ `btn btn-${classStyle} my-1 mx-1` }
        onClick={ () => handlerAddToCart(product) }
      >
        <i className={ `${icon} me-2` } />
        { text }
      </button>
    );
  }
}

ButtonIconText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classStyle: PropTypes.string.isRequired,
  product: PropTypes.shape({}).isRequired,
  handlerAddToCart: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default ButtonIconText;
