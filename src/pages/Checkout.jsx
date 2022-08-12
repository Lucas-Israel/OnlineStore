import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import CheckoutForm from '../components/CheckoutForm';

class Checkout extends Component {
  state = {
    cart: (!JSON.parse(localStorage.getItem('cart'))
      ? []
      : JSON.parse(localStorage.getItem('cart'))),
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    payment: false,
    showMessage: false,
  }

  validateForm = ({ fullname, email, cpf, phone, cep, address } = this.state) => {
    const { payment } = this.state;
    const arrayInputs = [fullname, email, cpf, phone, cep, address];
    return arrayInputs.some((input) => input.length === 0 || !payment);
  }

  handleOnChange = ({ target }) => {
    const name = target.type === 'radio' ? 'payment' : target.name;
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  completePurchase = () => {
    if (this.validateForm()) {
      return this.setState({ showMessage: true });
    }
    localStorage.setItem('cart', JSON.stringify([]));
    const { history } = this.props;
    return history.push('/');
  }

  render() {
    const {
      cart,
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      showMessage,
    } = this.state;
    return (
      <>
        <Header cart={ cart } categories={ false } />
        <section className="container">
          <div className="row justify-content-center text-center mt-3">
            <div className="col-12 col-lg-5 mx-5">
              {cart.map(({ title, thumbnail, price, orderQuantity, id }) => (
                <div
                  key={ id }
                  className="row justify-content-center align-items-center my-3"
                >
                  <div className="col-8 col-lg-3 mb-3">
                    <img
                      src={ thumbnail.replace(/I.jpg/g, 'W.jpg') }
                      alt={ title }
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                  <div className="col-12 col-lg-9 text-start mb-3">
                    <div
                      data-testid="shopping-cart-product-name"
                      className="row fs-6"
                    >
                      {title}
                    </div>
                    <div className="row my-3">
                      <p data-testid="shopping-cart-product-quantity">
                        { orderQuantity }
                      </p>
                      {`R$ ${price}`}
                    </div>
                  </div>
                  <hr />
                </div>
              )) }
            </div>
            <div className="col-12 col-lg-6">
              <CheckoutForm
                fullname={ fullname }
                email={ email }
                cpf={ cpf }
                phone={ phone }
                cep={ cep }
                address={ address }
                handleOnChange={ this.handleOnChange }
                completePurchase={ this.completePurchase }
              />
              {showMessage
              && (
                <p
                  data-testid="error-msg"
                  className="alert alert-danger my-3"
                >
                  Campos inválidos
                </p>
              )}
            </div>
          </div>
        </section>
      </>

    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;
