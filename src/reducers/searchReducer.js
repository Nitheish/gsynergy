import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  CLEAR_SEARCH_RESULTS,
} from '../actions/searchActions';

const initialState = {
  searchResults: [],
  searching: false,
  searchError: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        searching: true,
        searchError: null,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        searching: false,
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        searching: false,
        searchError: action.payload,
      };
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
