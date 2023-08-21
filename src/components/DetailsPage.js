import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetailsPage = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const movieId = match.params.id;
    fetchMovieDetails(movieId);
  }, [match.params.id]);

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/157336`,
        {
          params: {
            api_key: 'b954351371f0fb530b15e22a3ec91860', // Replace with your actual API key
          },
        }
      );

      setMovieDetails(response.data);
    } catch (error) {
      console.error('Failed to fetch movie details:', error);
    }
  };

  return (
    <div className="details-page">
      <div className="back-button">
        <Link to="/" className="btn btn-primary">
          Back to List
        </Link>
      </div>
      {movieDetails && (
        <div className="movie-details">
          <h2 className="movie-title">{movieDetails.title}</h2>
          <p className="rating">Rating: {movieDetails.vote_average}</p>
          <p>Year of Release: {movieDetails.release_date}</p>
          <p>Length: {movieDetails.runtime} min</p>
          <p>Director: {movieDetails.director}</p>
          <p>Cast: {movieDetails.cast.join(', ')}</p>
          <h3>Description:</h3>
          <p className="description">{movieDetails.overview}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
