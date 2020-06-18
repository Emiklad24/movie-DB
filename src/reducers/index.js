import { combineReducers } from 'redux'
import authReducer from './authReducer';
import popularMoviesReducer from './popularMoviesReducer';

export default combineReducers({
    auth: authReducer,
    movies: popularMoviesReducer
})