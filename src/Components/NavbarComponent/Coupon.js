
import React, { Component } from 'react';
import CouponResult from './FilterComponents/CouponResult';
import CouponFilter from './FilterComponents/CouponFilter';
import API from '../API_Config';

class Coupon extends Component {
  state = {
    selectedCategory: '',
    products: [],
    error: null,
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { selectedCategory } = this.state;
    let apiUrl = `${API}/api/couponcodes/getAllCodes`;

    const filterParams = [];

    if (selectedCategory) {
      filterParams.push(`category=${selectedCategory}`);
    }

    if (filterParams.length > 0) {
      apiUrl += `?${filterParams.join('')}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data, error: null }))
      .catch((error) => this.setState({ error }));
  };

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category }, this.fetchProducts);
  };

  render() {
    const { selectedCategory, products, error } = this.state;

    return (
      <div className='container-fluid'>
        <CouponFilter
          selectedCategory={selectedCategory}
          onCategoryChange={this.handleCategoryChange}
        />
        {error ? (
          <p>Error fetching products: {error.message}</p>
        ) : (
          <CouponResult products={products} />
        )}
      </div>
    );
  }
}

export default Coupon;
