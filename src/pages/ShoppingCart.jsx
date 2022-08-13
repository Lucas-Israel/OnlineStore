import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class ShoppingCart extends Component {
  state = {
    cart: (!JSON.parse(localStorage.getItem('cart'))
      ? []
      : JSON.parse(localStorage.getItem('cart'))),
  }

  componentDidUpdate = () => {
    const { cart } = this.state;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  increaseProductQuantity = (idProduct, operation) => {
    const { cart } = this.state;
    const index = cart.indexOf(cart.find(({ id }) => id === idProduct));
    if (operation === 'increase'
    && cart[index].orderQuantity < cart[index].available_quantity) {
      cart[index].orderQuantity += 1;
      const cartUpdate = cart;
      return this.setState({ cart: cartUpdate });
    }
    if (operation === 'decrease' && cart[index].orderQuantity > 1) {
      cart[index].orderQuantity -= 1;
      const cartUpdate = cart;
      return this.setState({ cart: cartUpdate });
    }
  }

  removeProduct = (id) => {
    const { cart } = this.state;
    const cartUpdate = cart.filter((item) => item.id !== id);
    this.setState({ cart: cartUpdate });
  }

  render() {
    const { cart } = this.state;
    const totalPrice = cart.length > 0 ? 0 : cart
      .map(({ price, orderQuantity }) => price * orderQuantity).reduce((a, b) => a + b);
    const currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BRL',
    });
    return (
      <>
        <Header cart={ cart } categories={ false } />
        <section className="container">
          <div className="row justify-content-center text-center mt-3">
            {cart.length > 0
              ? cart.map(({ thumbnail, title, price, orderQuantity, id }) => (
                <div
                  key={ id }
                  className="row justify-content-center align-items-center my-3"
                >
                  <div className="col-8 col-lg-2 mb-3">
                    <img
                      src={ thumbnail.replace(/I.jpg/g, 'W.jpg') }
                      alt={ title }
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                  <div className="col-12 col-lg-6 text-start mb-3">
                    <div
                      data-testid="shopping-cart-product-name"
                      className="row fs-5"
                    >
                      {title}
                    </div>
                    <div className="row my-3">{`R$ ${price.toFixed(2)}`}</div>
                    <div className="row align-items-center justify-content-center">
                      <button
                        type="button"
                        className="btn
                        btn-secondary btn-sm d-none d-lg-block col-4 col-lg-1"
                        onClick={ () => this.increaseProductQuantity(id, 'decrease') }
                      >
                        <i className="fa-solid fa-minus fa-lg" />
                      </button>
                      <button
                        type="button"
                        data-testid="product-decrease-quantity"
                        className="btn btn-secondary btn-lg d-lg-none col-4 col-lg-1"
                        onClick={ () => this.increaseProductQuantity(id, 'decrease') }
                      >
                        <i className="fa-solid fa-minus fa-lg" />
                      </button>
                      <div
                        data-testid="shopping-cart-product-quantity"
                        className="col-3 col-lg-1 text-center fs-4 mx-2"
                      >
                        { orderQuantity }
                      </div>
                      <button
                        type="button"
                        className="btn
                        btn-success btn-sm d-none d-lg-block col-4 col-lg-1"
                        onClick={ () => this.increaseProductQuantity(id, 'increase') }
                        disabled={ this.increaseButtonDisabled }
                      >
                        <i className="fa-solid fa-plus fa-lg" />
                      </button>
                      <button
                        type="button"
                        data-testid="product-increase-quantity"
                        className="btn
                        btn-success
                        btn-lg d-block d-lg-none col-4 col-lg-1"
                        onClick={ () => this.increaseProductQuantity(id, 'increase') }
                        disabled={ this.increaseButtonDisabled }
                      >
                        <i className="fa-solid fa-plus fa-lg" />
                      </button>
                      <button
                        type="button"
                        data-testid="remove-product"
                        className="btn
                        btn-sm
                        btn-outline-danger
                        col-2
                        offset-lg-6
                        col-lg-2
                        mt-3"
                        onClick={ () => this.removeProduct(id) }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <hr style={ { width: '70%' } } />
                </div>
              ))
              : (
                <p
                  data-testid="shopping-cart-empty-message"
                >
                  Seu carrinho está vazio
                </p>)}
            <div
              className="fs-5 mb-3"
            >
              {cart.length > 'Total: R$0.00 ? 0 : `Total: ${currency.format(totalPrice)}`}
            </div>
            <Link to="/checkout">
              <button
                type="button"
                className="btn btn-success btn-lg"
                data-testid="checkout-products"
              >
                Finalize a compra
              </button>
            </Link>
          </div>

        </section>
      </>

    );
  }
}

export default ShoppingCart;
