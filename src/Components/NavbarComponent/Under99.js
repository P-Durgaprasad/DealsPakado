import React, { Component } from 'react';
import FilterResult from './FilterComponents/FilterResult';
import '../HomeComponent/Css/NewCss.css';
import API from '../API_Config';

class Under99 extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    let apiUrl = `${API}/api/product/Under99`;
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

  render() {
    const { products, isLoading } = this.state;

    return (
      <div className='container-fluid'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <FilterResult products={products} />
        )}
      </div>
    );
  }
}

export default Under99;
