import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const { title, vote_average, overview, poster_path } = movie;

  return (
    <div className="movie-card">
      <img
        className="movie-card__image"
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
      />
      <div className="movie-card__content">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__rating">Rating: {vote_average}</p>
        <p className="movie-card__overview">{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
