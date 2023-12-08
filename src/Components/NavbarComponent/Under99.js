import React, { Component } from 'react';
import FilterResult from './FilterComponents/FilterResult';
import '../HomeComponent/Css/NewCss.css';
import API from '../API_Config';

class Under99 extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      error: null,
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
          this.setState({ products: data, error: null });
        })
        .catch((error) => {
          this.setState({  });
        });
    };

  render() {
    const {products, error } = this.state;
    return (
      <div className='container-fluid '>
        {error ? (
          <p>Server Down! please Try Again</p>
        ) : (
          <FilterResult products={products} />
        )}
      </div>
    );
  }
}

export default Under99;
