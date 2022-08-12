import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationForm extends Component {
  render() {
    const { email, textarea, handleOnChange, handleSaveForm } = this.props;
    return (
      <form className="p-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
            <input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="form-control"
              style={ { minWidth: '300px' } }
              data-testid="product-detail-email"
              value={ email }
              onChange={ handleOnChange }
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="textarea" className="form-label">
            Mensagem
            <textarea
              value={ textarea }
              name="textarea"
              className="form-control"
              style={ { minWidth: '300px', minHeight: '150px' } }
              placeholder="Digite a mensagem (opcional)"
              data-testid="product-detail-evaluation"
              onChange={ handleOnChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="1" className="mx-1">
            <input
              type="radio"
              name="rated"
              id="1"
              value={ 1 }
              className="form-check-input"
              data-testid="1-rating"
              onChange={ handleOnChange }
            />
            &nbsp; 1
          </label>
          <label htmlFor="2" className="mx-1">
            <input
              type="radio"
              name="rated"
              id="2"
              value={ 2 }
              className="form-check-input"
              data-testid="2-rating"
              onChange={ handleOnChange }
            />
            &nbsp; 2
          </label>
          <label htmlFor="3" className="mx-1">
            <input
              type="radio"
              name="rated"
              id="3"
              value={ 3 }
              className="form-check-input"
              data-testid="3-rating"
              onChange={ handleOnChange }
            />
            &nbsp; 3
          </label>
          <label htmlFor="4" className="mx-1">
            <input
              type="radio"
              name="rated"
              id="4"
              value={ 4 }
              className="form-check-input"
              data-testid="4-rating"
              onChange={ handleOnChange }
            />
            &nbsp; 4
          </label>
          <label htmlFor="5" className="mx-1">
            <input
              type="radio"
              name="rated"
              id="5"
              value={ 5 }
              className="form-check-input"
              data-testid="5-rating"
              onChange={ handleOnChange }
            />
            &nbsp; 5
          </label>
        </div>
        <button
          type="button"
          className="btn btn-dark my-3"
          data-testid="submit-review-btn"
          onClick={ handleSaveForm }
        >
          <i className="fa-solid fa-floppy-disk me-2" />
          Enviar
        </button>
      </form>
    );
  }
}

EvaluationForm.propTypes = {
  email: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleSaveForm: PropTypes.func.isRequired,
};

export default EvaluationForm;
