import React, { Component } from 'react';
import FilterResult from './FilterComponents/FilterResult';
import BabyFilter from './FilterComponents/BabyFilter';
import API from '../API_Config';

class Baby extends Component {
  state = {
    selectedSubCategory: '',
    minPrice: 0,
    maxPrice: 200000,
    products: [],
    error: null,
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { selectedSubCategory, minPrice, maxPrice } = this.state;
    let apiUrl = `${API}/api/product/byCategory?category=Baby`;

    const filterParams = [];

    if (selectedSubCategory) {
      filterParams.push(`subcategory=${selectedSubCategory}`);
    }

    if (minPrice >= 0) {
      filterParams.push(`minPrice=${minPrice}`);
    }

    if (maxPrice <= 200000) {
      filterParams.push(`maxPrice=${maxPrice}`);
    }

    if (filterParams.length > 0) {
      apiUrl += `&${filterParams.join('&')}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data, error: null }))
      .catch((error) => this.setState({ error }));
  };

  handleSubCategoryChange = (brand) => {
    this.setState({ selectedSubCategory: brand }, this.fetchProducts);
  };

  handleApplyPriceFilter = ({ minPrice, maxPrice }) => {
    this.setState({ minPrice, maxPrice }, this.fetchProducts);
  };

  render() {
    const { selectedSubCategory, products, error } = this.state;

    return (
      <div className='container-fluid'>
        <BabyFilter
          selectedSubCategory={selectedSubCategory}
          onPriceChange={this.handleApplyPriceFilter}
          onSubCategoryChange={this.handleSubCategoryChange}
        />
        {error ? (
          <p>Error fetching products: {error.message}</p>
        ) : (
          <FilterResult products={products} />
        )}
      </div>
    );
  }
}

export default Baby;