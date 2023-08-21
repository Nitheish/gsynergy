import axios from 'axios';

// Action Types
export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';

// Action Creators
export const searchMoviesRequest = () => ({
  type: SEARCH_MOVIES_REQUEST,
});

export const searchMoviesSuccess = (searchResults) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: searchResults,
});

export const searchMoviesFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  payload: error,
});

// Thunk to search movies
export const searchMovies = (query) => async (dispatch) => {
  dispatch(searchMoviesRequest());

  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: 'YOUR_API_KEY', // Replace with your actual API key
          query: query,
        },
      }
    );

    dispatch(searchMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(searchMoviesFailure(error.message));
  }
};
