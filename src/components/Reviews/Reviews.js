import api from '../../services/theMovieApi';
import React, { Component } from 'react';
import s from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const movieReviews = await api.getReviews(movieId);

    this.setState({
      reviews: movieReviews,
    });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.map(el => (
          <li key={el.id}>
            <p>
              Author: <span className={s.item}>{el.author}</span>
            </p>
            <p>
              <span className={s.item}> Message:</span> {el.content}
            </p>
          </li>
        ))}
      </>
    );
  }
}

export default Reviews;
