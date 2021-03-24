import React, { Component } from 'react';
import api from '../../services/theMovieApi';
import SearchMovie from '../../components/SearchMovie';
import MovieList from '../../components/MovieList';

class MovieView extends Component {
  state = {
    quary: '',
    movies: null,
  };

  componentDidMount() {
    const { search } = this.props.location;

    if (search) {
      this.setState({ quary: search.slice(7) });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { quary } = this.state;
    if (prevState.quary !== quary) {
      const movies = await api.searchMovies(quary);
      this.setState({
        movies: movies,
      });
    }
  }

  hendleChangeQuery = value => {
    const { history } = this.props;
    this.setState({
      quary: value,
    });
    history.push({ search: `query=${value}` });
  };

  render() {
    const { movies } = this.state;

    return (
      <div>
        <SearchMovie onSubmit={this.hendleChangeQuery} />
        {movies && <MovieList movies={movies} />}
      </div>
    );
  }
}

export default MovieView;
