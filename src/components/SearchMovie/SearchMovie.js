import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchMovie extends Component {
  state = {
    searchQuary: '',
  };

  hendleChange = e => {
    this.setState({
      searchQuary: e.currentTarget.value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuary);
    this.setState({
      searchQuary: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.hendleSubmit}>
          <input
            onChange={this.hendleChange}
            value={this.state.searchQuary}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchMovie);
