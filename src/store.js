import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import movieReducer from './reducers/movieReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
