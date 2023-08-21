import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const ListPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  const fetchUpcomingMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming',
        {
          params: {
            api_key: 'b954351371f0fb530b15e22a3ec91860', // Replace with your actual API key
          },
        }
      );

      setUpcomingMovies(response.data.results);
    } catch (error) {
      console.error('Failed to fetch upcoming movies:', error);
    }
  };

  return (
    <div className="list-page">
      <h1 className="page-title">Upcoming Movies</h1>
      <div className="movie-list">
        {upcomingMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            description={movie.overview}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default ListPage;
