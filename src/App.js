import React, { Component } from 'react';

import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import Images from './components/Images/Images';

class App extends Component {
  state = {
    item: '',
    results: []
  };

  handleInputChange = e => {
    let value = e.target.value;
    this.setState({ item: value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const res = await unsplash.get('/search/photos', {
      params: {
        query: this.state.item
      }
    });

    this.setState({ results: res.data.results });
  };

  render() {
    let results = null;
    if (this.state.results.length > 0) {
      results = <Images results={this.state.results} />;
    }
    return (
      <div className="ui container">
        <SearchBar
          value={this.state.value}
          searchImage={this.handleInputChange}
          formSubmit={this.handleFormSubmit}
        />
        {results}
      </div>
    );
  }
}

export default App;
