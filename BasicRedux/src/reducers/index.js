import { combineReducers } from 'redux';
import BooksReducer from './books';
import ActiveBook from './active-book';

const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook 
	//When ActiveBook reducer retrun, it will be
	//available as activeBook of application state
});

export default rootReducer;