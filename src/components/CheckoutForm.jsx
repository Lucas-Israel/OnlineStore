import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutForm extends Component {
  render() {
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      handleOnChange,
      completePurchase,
    } = this.props;
    return (
      <form className="p-3 text-start bg-light rounded-3">
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label mx-2">
            Fullname
            <input
              type="text"
              name="fullname"
              value={ fullname }
              onChange={ handleOnChange }
              data-testid="checkout-fullname"
              placeholder="fullname"
              className="form-control"
            />
          </label>
          <label htmlFor="email" className="form-label mx-2">
            Email
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ handleOnChange }
              data-testid="checkout-email"
              placeholder="email"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="cpf" className="form-label mx-2">
            CPF
            <input
              type="text"
              name="cpf"
              value={ cpf }
              onChange={ handleOnChange }
              data-testid="checkout-cpf"
              placeholder="cpf"
              className="form-control"
            />
          </label>
          <label htmlFor="email" className="form-label mx-2">
            Phone
            <input
              type="text"
              name="phone"
              value={ phone }
              onChange={ handleOnChange }
              data-testid="checkout-phone"
              placeholder="phone"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="cep" className="form-label mx-2">
            CEP
            <input
              type="text"
              name="cep"
              value={ cep }
              onChange={ handleOnChange }
              data-testid="checkout-cep"
              placeholder="cep"
              className="form-control"
            />
          </label>
          <label htmlFor="address" className="form-label mx-2">
            Address
            <input
              type="text"
              name="address"
              value={ address }
              onChange={ handleOnChange }
              data-testid="checkout-address"
              placeholder="address"
              className="form-control"
            />
          </label>
        </div>
        <div>
          <label htmlFor="boleto" className="mx-2">
            <input
              type="radio"
              name="payment"
              id="boleto"
              value="boleto"
              className="form-check-input"
              data-testid="ticket-payment"
              onChange={ handleOnChange }
            />
            &nbsp; Boleto
          </label>
          <label htmlFor="visa" className="mx-2">
            <input
              type="radio"
              name="payment"
              id="visa"
              value="visa"
              className="form-check-input"
              data-testid="visa-payment"
              onChange={ handleOnChange }
            />
            &nbsp; Visa
          </label>
          <label htmlFor="master" className="mx-2">
            <input
              type="radio"
              name="payment"
              id="master"
              value="master"
              className="form-check-input"
              data-testid="master-payment"
              onChange={ handleOnChange }
            />
            &nbsp; Master
          </label>
          <label htmlFor="elo" className="mx-2">
            <input
              type="radio"
              name="payment"
              id="elo"
              value="elo"
              className="form-check-input"
              data-testid="elo-payment"
              onChange={ handleOnChange }
            />
            &nbsp; Elo
          </label>
        </div>
        <button
          type="button"
          data-testid="checkout-btn"
          onClick={ completePurchase }
          className="btn btn-dark my-3 ms-2"
        >
          Concluir Compra
        </button>
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  fullname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  completePurchase: PropTypes.func.isRequired,
};

export default CheckoutForm;
