import React, { Component } from 'react';
import FurnitureFilter from './FilterComponents/FurnitureFilter'; // Corrected import
import FilterResult from './FilterComponents/FilterResult';
import '../HomeComponent/Css/NewCss.css';
import API from '../API_Config';

class Furniture extends Component {
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
    let apiUrl = `${API}/api/product/byCategory?category=HomeFurniture`;

    // Construct the API URL based on filter selections
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
        this.setState({ products: data, isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSubCategoryChange = (brand) => {
    this.setState({ selectedSubCategory: brand }, this.fetchProducts);
  };

  // Handle price filter change
  handleApplyPriceFilter = ({ minPrice, maxPrice }) => {
    this.setState({ minPrice, maxPrice }, this.fetchProducts);
  };

  render() {
    const { selectedSubCategory, products, isLoading } = this.state;

    return (
      <div className='container-fluid'>
        <FurnitureFilter
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

export default Furniture;
