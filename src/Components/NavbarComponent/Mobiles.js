import React, { Component } from 'react';
import MobileFilter from './FilterComponents/MobileFilter';
import FilterResult from './FilterComponents/FilterResult';
import '../HomeComponent/Css/NewCss.css';
import API from '../API_Config';

class Mobiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBrand: '',
      minPrice: 0,
      maxPrice: 200000,
      products: [],
      error: null,
    };
  }

  componentDidMount() {
    // Fetch initial product data when the component mounts
    this.fetchProducts();
  }

  // Function to fetch products based on filters
  fetchProducts = () => {
    const { selectedBrand, minPrice,maxPrice } = this.state;
    let apiUrl = `${API}/api/product/byCategory?category=Mobiles`;

    // Construct the API URL based on filter selections
    const filterParams = [];

    if (selectedBrand) {
      filterParams.push(`brand=${selectedBrand}`);
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
        this.setState({ products: data, error: null });
      })
      .catch((error) => {
        this.setState({});
      });
  };


  handleBrandChange = (brand) => {
    this.setState({ selectedBrand: brand }, () => {
      this.fetchProducts();
    });
  };

  handleApplyPriceFilter = ({ minPrice, maxPrice }) => {
    this.setState({ minPrice, maxPrice }, () => {
      this.fetchProducts();
    });
  };

  render() {
    const { selectedBrand, products, error } = this.state;

    return (
      <div>
        <MobileFilter
          selectedBrand={selectedBrand}
          onBrandChange={this.handleBrandChange}
          onPriceChange={this.handleApplyPriceFilter}
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

export default Mobiles;
