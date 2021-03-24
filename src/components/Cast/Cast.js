import api from '../../services/theMovieApi';
import React, { Component } from 'react';
import imgDefault from '../../img/defaultActorImg.jpg';
import s from '../Cast/Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const movieCast = await api.getCust(movieId);

    this.setState({
      cast: movieCast,
    });
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        {cast.map(el => (
          <li key={el.cast_id}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : imgDefault
              }
              width="150"
              alt={el.name}
            />

            <p>
              Name: <span className={s.label}>{el.name}</span>
            </p>
            <p>
              Character: <span className={s.label}>{el.character}</span>
            </p>
          </li>
        ))}
      </>
    );
  }
}

export default Cast;
