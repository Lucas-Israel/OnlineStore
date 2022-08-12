import React from 'react';
import PropTypes from 'prop-types';
import ButtonIconText from './ButtonIconText';
import ButtonLinkIconText from './ButtonLinkIconText';
import deliveryfree from '../assets/img/deliveryfree.png';

class ProductCard extends React.Component {
  render() {
    const { product, handlerAddToCart } = this.props;
    const { title, thumbnail, price, shipping } = product;
    const freeShipping = 'free_shipping';
    const isFreeShipping = shipping[freeShipping];
    const maxCaracteres = 47;
    return (
      <div className="col ms-2 my-3">
        <div
          className="card shadow-sm"
          data-testid="product"
          style={ { width: '18rem', height: '33rem' } }
        >
          <img
            src={ thumbnail.replace(/I.jpg/g, 'W.jpg') }
            alt={ title }
            className="bd-placeholder-img card-img-top"
          />
          <div className="card-body">
            <p
              className="card-text"
              style={ { height: '48px' } }
            >
              { `${title.substr(0, maxCaracteres)}...` }

            </p>
            <div className="row" style={ { height: '48px' } }>
              <div className="col-7">
                {`R$${price.toFixed(2)}`}
              </div>
              <div className="col-5">
                {isFreeShipping
            && <img
              src={ deliveryfree }
              data-testid="free-shipping"
              className="img-fluid"
              style={ { height: '48px' } }
              alt="Frete Grátis"
            />}
              </div>
            </div>
            <div className="row p-2 text-center">
              <ButtonLinkIconText
                classStyle="secondary"
                icon="fa-solid fa-circle-info"
                text="See Details"
                handlerAddToCart={ handlerAddToCart }
                product={ product }
              />
              <ButtonIconText
                classStyle="success"
                icon="fa-solid fa-cart-plus"
                text="Add To Cart"
                handlerAddToCart={ handlerAddToCart }
                product={ product }
                dataTestId="product-add-to-cart"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.shape({ }).isRequired,
  }).isRequired,
  handlerAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
