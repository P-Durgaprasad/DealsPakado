import React, { Component } from 'react';
import SportsFilter from './FilterComponents/SportsFilter';
import FilterResult from './FilterComponents/FilterResult';
import '../HomeComponent/Css/NewCss.css';
import API from '../API_Config';

class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubCategory: '',
      minPrice: 0,
      maxPrice: 200000,
      products: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { selectedSubCategory, minPrice, maxPrice } = this.state;
    let apiUrl = `${API}/api/product/byCategory?category=Sports`;
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
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ products: data, isLoading: false, error: null });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSubCategoryChange = (brand) => {
    this.setState({ selectedSubCategory: brand, isLoading: true }, () => {
      this.fetchProducts();
    });
  };

  handleApplyPriceFilter = ({ minPrice, maxPrice }) => {
    this.setState({ minPrice, maxPrice, isLoading: true }, () => {
      this.fetchProducts();
    });
  };

  render() {
    const { selectedSubCategory, products, isLoading, error } = this.state;

    return (
      <div className='container-fluid '>
        <SportsFilter
          selectedSubCategory={selectedSubCategory}
          onPriceChange={this.handleApplyPriceFilter}
          onSubCategoryChange={this.handleSubCategoryChange}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching products: {error.message}</p>
        ) : (
          <FilterResult products={products} />
        )}
      </div>
    );
  }
}

export default Sports;
