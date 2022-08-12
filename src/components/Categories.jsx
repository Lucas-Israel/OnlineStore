import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  state={
    categories: [],
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { handleCategory } = this.props;
    const { categories } = this.state;
    return (
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="NavCategories"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Categories</h5>
          <button
            type="button"
            className="btn btn-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i
              className="fa-solid fa-xmark"
            />
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group list-group-flush">
            {categories.map((category) => (
              <li
                key={ category.id }
                data-bs-dismiss="offcanvas"
                className="btn btn-dark my-1"
              >
                <button
                  data-testid="category"
                  type="button"
                  className="btn btn-link text-start"
                  style={ { width: '100%' } }
                  onClick={ () => handleCategory(category.id) }
                >
                  {category.name}
                </button>
              </li>))}
          </ul>
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  handleCategory: PropTypes.func.isRequired,
};

export default Categories;
