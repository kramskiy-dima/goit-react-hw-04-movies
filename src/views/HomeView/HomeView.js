import React, { Component } from 'react';
import MovieList from '../../components/MovieList';
import api from '../../services/theMovieApi';

class HomeView extends Component {
  state = {
    trendingMovie: null,
  };

  async componentDidMount() {
    const movies = await api.getPopularMovie();
    this.setState({
      trendingMovie: movies,
    });
  }

  render() {
    const { trendingMovie } = this.state;
    return (
      <div>
        <h1>Tranding Today</h1>
        {trendingMovie && <MovieList movies={trendingMovie} />}
      </div>
    );
  }
}

export default HomeView;
