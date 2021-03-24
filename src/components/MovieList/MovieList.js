import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import MoviePreview from '../MoviesPreview';
import s from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={s.MoviePreview}>
      {movies.map(movie => (
        <li key={movie.id} className={s.item}>
          <Link
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: { from: location },
            }}
          >
            <MoviePreview img={movie.backdrop_path} title={movie.title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieList);
