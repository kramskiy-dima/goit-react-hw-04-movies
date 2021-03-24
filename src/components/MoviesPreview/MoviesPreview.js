import React from 'react';
import s from './MoviesPreview.module.css';
import defaultImg from '../../img/defaultMovieImg.jpg';
import PropTypes from 'prop-types';

const MoviesPreview = ({ img, title }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500${img}`;

  return (
    <div className={s.MoviePreview}>
      <img src={img ? imgUrl : defaultImg} alt={title} width="270" />
      <p>{title}</p>
    </div>
  );
};

MoviesPreview.defaultProps = {
  img: { defaultImg },
};

MoviesPreview.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MoviesPreview;
