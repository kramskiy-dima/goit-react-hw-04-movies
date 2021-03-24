import React, { Component, lazy, Suspense } from 'react';
import api from '../../services/theMovieApi';
import { NavLink, Route } from 'react-router-dom';
import imgDefault from '../../img/defaultMovieImg.jpg';
import s from './MovieDetailsPage.module.css';
import routes from '../../routes';
const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "Reviews" */),
);

class MovieDetailsPage extends Component {
  state = {
    genres: [],
    title: null,
    overview: null,
    popularity: null,
    poster_path: null,
    release_date: null,
  };
  async componentDidMount() {
    console.log('componentDidMount');
    const movieId = Number(this.props.match.params.movieId);
    const movie = await api.getMovieDetails(movieId);

    this.setState({
      poster_path: movie.poster_path,
      genres: movie.genres,
      title: movie.title,
      overview: movie.overview,
      vote_average: movie.vote_average,
    });
  }

  hendleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.movies);
  };

  render() {
    const { title, genres, vote_average } = this.state;
    const imgUrl = `https://image.tmdb.org/t/p/w500${this.state.poster_path}`;

    return (
      title && (
        <>
          <div className={s.details}>
            <div className={s.preview}>
              <button onClick={this.hendleGoBack} type="button">
                Come back
              </button>
              <h1>{title}</h1>
              <img
                src={this.state.poster_path ? imgUrl : imgDefault}
                alt={title}
                width="350"
              />
            </div>
            <div className={s.description}>
              <h2>Popularity </h2>
              <p>{vote_average}</p>
              <h3>Overview</h3>
              <p>{this.state.overview}</p>
              <h4>Ganres</h4>
              <p>
                {genres.map(el => (
                  <li key={el.id}>{el.name}</li>
                ))}
              </p>
            </div>
          </div>
          <ul className={s.addition}>
            <li>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={`${this.props.match.url}/cast`}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={`${this.props.match.url}/reviews`}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <ul className={s.list}>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path={`${this.props.match.path}/cast`} component={Cast} />
              <Route
                path={`${this.props.match.path}/reviews`}
                component={Reviews}
              />
            </Suspense>
          </ul>
        </>
      )
    );
  }
}

export default MovieDetailsPage;
