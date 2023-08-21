import axios from 'axios';

// Action Types
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_MOVIE_DETAILS_REQUEST = 'FETCH_MOVIE_DETAILS_REQUEST';
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';
export const FETCH_MOVIE_DETAILS_FAILURE = 'FETCH_MOVIE_DETAILS_FAILURE';

// Action Creators
export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovieDetailsRequest = () => ({
  type: FETCH_MOVIE_DETAILS_REQUEST,
});

export const fetchMovieDetailsSuccess = (movieDetails) => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  payload: movieDetails,
});

export const fetchMovieDetailsFailure = (error) => ({
  type: FETCH_MOVIE_DETAILS_FAILURE,
  payload: error,
});

// Thunk to fetch movies
export const fetchMovies = () => async (dispatch) => {
  dispatch(fetchMoviesRequest());

  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/upcoming',
      {
        params: {
          api_key: 'YOUR_API_KEY', // Replace with your actual API key
        },
      }
    );

    dispatch(fetchMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

// Thunk to fetch movie details
export const fetchMovieDetails = (movieId) => async (dispatch) => {
  dispatch(fetchMovieDetailsRequest());

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: 'YOUR_API_KEY', // Replace with your actual API key
        },
      }
    );

    dispatch(fetchMovieDetailsSuccess(response.data));
  } catch (error) {
    dispatch(fetchMovieDetailsFailure(error.message));
  }
};
