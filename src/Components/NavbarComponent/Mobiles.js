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
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { selectedBrand, minPrice, maxPrice } = this.state;
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
        this.setState({ products: data, isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
  };

  handleBrandChange = (brand) => {
    this.setState({ selectedBrand: brand }, this.fetchProducts);
  };

  handleApplyPriceFilter = ({ minPrice, maxPrice }) => {
    this.setState({ minPrice, maxPrice }, this.fetchProducts);
  };

  render() {
    const { selectedBrand, products, isLoading } = this.state;

    return (
      <div className='container-fluid'>
        <MobileFilter
          selectedBrand={selectedBrand}
          onBrandChange={this.handleBrandChange}
          onPriceChange={this.handleApplyPriceFilter}
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

export default Mobiles;
