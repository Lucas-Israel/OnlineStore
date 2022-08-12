import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ButtonLinkIconText extends React.Component {
  render() {
    const { icon, text, classStyle, product } = this.props;
    return (
      <Link
        to={ `/detalhes/${product.id}` }
        data-testid="product-detail-link"
        type="button"
        className={ `btn btn-${classStyle} my-1 mx-1` }
      >
        <i className={ `${icon} me-2` } />
        { text }

      </Link>
    );
  }
}

ButtonLinkIconText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classStyle: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ButtonLinkIconText;
