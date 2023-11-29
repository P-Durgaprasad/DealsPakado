import React, { Component } from 'react';
import CouponResult from './FilterComponents/CouponResult';
import '../HomeComponent/Css/NewCss.css';
import CouponFilter from './FilterComponents/CouponFilter';
import API from '../API_Config';

class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '', 
      products: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { selectedCategory } = this.state;
    let apiUrl = `${API}/api/couponcodes/getAllCodes`;

    const filterParams = [];

    if (selectedCategory) { // Changed to selectedCategory
      filterParams.push(`category=${selectedCategory}`); // Changed to category
    }

    if (filterParams.length > 0) {
      apiUrl += `?${filterParams.join('')}`;
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ products: data, error: null });
      })
      .catch((error) => {
        this.setState({ });
      });
  };

  handleCategoryChange = (category) => { // Changed to handleCategoryChange
    this.setState({ selectedCategory: category }, () => { // Changed to selectedCategory
      this.fetchProducts();
    });
  };

  render() {
    const { selectedCategory, products, error } = this.state;

    return (
      <div>
        <CouponFilter
          selectedCategory={selectedCategory} // Changed to selectedCategory
          onCategoryChange={this.handleCategoryChange} // Changed to onCategoryChange
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
