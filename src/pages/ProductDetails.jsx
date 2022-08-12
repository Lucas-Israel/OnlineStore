import React from 'react';
import PropTypes from 'prop-types';
import { getProductsByID } from '../services/api';
import ButtonIconText from '../components/ButtonIconText';
import Header from '../components/Header';
import EvaluationForm from '../components/EvaluationForm';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      cart: (!JSON.parse(localStorage.getItem('cart'))
        ? []
        : JSON.parse(localStorage.getItem('cart'))),
      productName: '',
      productPrice: '',
      productThumbnail: '',
      details: [],
      product: {},
      email: '',
      rated: '',
      textarea: '',
      showMessage: false,
      evaluations: (!JSON.parse(localStorage.getItem(id))
        ? []
        : JSON.parse(localStorage.getItem(id))),
    };
  }

  componentDidUpdate = () => {
    const { cart, evaluations, product: { id } } = this.state;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem(id, JSON.stringify(evaluations));
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductsByID(id);
    const { title, price, thumbnail, attributes } = data;
    this.setState({
      product: data,
      productName: title,
      productPrice: price,
      productThumbnail: thumbnail,
      details: attributes,
    });
  }

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  validateForm = ({ email, rated } = this.state) => {
    const arrayInputs = [email, rated];
    return arrayInputs.some((input) => input.length === 0);
  }

  handleSaveForm = () => {
    const { email, rated, textarea } = this.state;
    if (this.validateForm()) {
      return this.setState({ showMessage: true });
    }
    this.setState({ showMessage: false });
    const evaluation = {
      email,
      rated,
      textarea,
    };
    this.setState((before) => ({ evaluations: [...before.evaluations, evaluation] }));
    this.setState({
      email: '',
      rated: '',
      textarea: '',
    });
  }

  handlerAddToCart = (product) => {
    const { cart } = this.state;
    if (cart.some(({ id }) => id === product.id)) {
      const index = cart.indexOf(cart.find(({ id }) => id === product.id));
      cart[index].orderQuantity += 1;
      const cartUpdate = cart;
      this.setState({ cart: cartUpdate });
      return;
    }
    const orderQuantity = 'orderQuantity';
    product[orderQuantity] = 1;
    this.setState((before) => ({ cart: [...before.cart, product] }));
  }

  render() {
    const {
      email,
      showMessage,
      evaluations,
      textarea, productName, productPrice, productThumbnail, details, cart, product,
    } = this.state;
    return (
      <>
        <Header cart={ cart } categories={ false } />
        <section className="container mt-5">
          <div className="row justify-content-center align-items-start text-start mt-3">
            <div
              className="col-12 col-lg-4 card shadow-sm p-4"
            >
              <img
                src={ productThumbnail.replace(/I.jpg/g, 'W.jpg') }
                alt={ productName }
                data-testid="product-detail-image"
                className="img-fluid mx-auto d-block"
                style={ { maxHeight: '250px' } }
              />
              <span
                data-testid="product-detail-name"
                className="bold fs-6 my-3"
              >
                {productName}
              </span>
              <span
                className="fs-5 mb-3"
                data-testid="product-detail-price"
              >
                {`R$ ${productPrice}`}
              </span>
              <ButtonIconText
                classStyle="success"
                icon="fa-solid fa-cart-plus"
                text="Add To Cart"
                handlerAddToCart={ () => this.handlerAddToCart(product) }
                product={ product }
                dataTestId="product-detail-add-to-cart"
              />
            </div>
            <div className="col-12 col-lg-7 ms-lg-5 p-4">
              <h4 className="list-group-item">Especificações Técnicas</h4>
              <ul className="list-group list-group-flush">

                {details.map((productDetail, index) => (
                  <li
                    key={ productDetail.id + productDetail.value_id }
                    className={ `list-group-item ${index % 2 === 0 ? '' : 'bg-light'}` }
                  >
                    {`${productDetail.name} 
                ${productDetail.value_name === null ? '' : productDetail.value_name}`}
                  </li>
                ))}
              </ul>
              {evaluations.length > 0
              && <h4 className="list-group-item mt-5">Avaliações</h4>}
              <ul className="list-group list-group-flush">
                {evaluations.map((element, index) => (
                  <li
                    key={ index }
                    className="list-group-item"
                  >
                    <p data-testid="review-card-email">{ element.email }</p>
                    <p data-testid="review-card-rating">{ element.rated }</p>
                    <p data-testid="review-card-evaluation">{ element.textarea }</p>
                  </li>
                ))}
              </ul>
              <h4 className="list-group-item mt-5">Avalie</h4>
              <EvaluationForm
                email={ email }
                textarea={ textarea }
                handleOnChange={ this.handleOnChange }
                handleSaveForm={ this.handleSaveForm }
              />
              {showMessage
              && (
                <p
                  data-testid="error-msg"
                  className="alert alert-danger"
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

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
