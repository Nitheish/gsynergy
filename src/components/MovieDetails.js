import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  const {
    title,
    vote_average,
    release_date,
    runtime,
    director,
    cast,
    overview,
  } = movie;

  return (
    <div className="movie-details">
      <Link to="/" className="back-link">
        Back to List
      </Link>
      <h2 className="movie-details__title">{title}</h2>
      <p className="movie-details__rating">Rating: {vote_average}</p>
      <p className="movie-details__release-date">Release Date: {release_date}</p>
      <p className="movie-details__runtime">Runtime: {runtime} mins</p>
      <p className="movie-details__director">Director: {director}</p>
      <p className="movie-details__cast">Cast: {cast.join(', ')}</p>
      <p className="movie-details__overview">{overview}</p>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    cast: PropTypes.arrayOf(PropTypes.string).isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
