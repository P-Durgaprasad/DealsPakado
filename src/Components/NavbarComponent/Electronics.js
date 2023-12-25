// Electronics.js
import React, { Component } from 'react';
import ElectronicsFilter from './FilterComponents/ElectronicsFilter';
import FilterResult from './FilterComponents/FilterResult';
import API from '../API_Config';

class Electronics extends Component {
  state = {
    selectedSubCategory: '',
    minPrice: 0,
    maxPrice: 200000,
    products: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { selectedSubCategory, minPrice, maxPrice } = this.state;
    let apiUrl = `${API}/api/product/byCategory?category=Electronics`;

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

    this.setState({ isLoading: true }); 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ products: data, isLoading: false, error: null });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  };

  handleSubCategoryChange = (brand) => {
    this.setState({ selectedSubCategory: brand }, this.fetchProducts);
  };

  handleApplyPriceFilter = ({ minPrice, maxPrice }) => {
    this.setState({ minPrice, maxPrice }, this.fetchProducts);
  };

  render() {
    const { selectedSubCategory, products, isLoading } = this.state;

    return (
      <div className='container-fluid'>
        <ElectronicsFilter
          selectedSubCategory={selectedSubCategory}
          onPriceChange={this.handleApplyPriceFilter}
          onSubCategoryChange={this.handleSubCategoryChange}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <FilterResult products={products} />
        )}
      </div>
    );
  }
}

export default Electronics;
