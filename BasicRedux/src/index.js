import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import BookList from './components/app'; 
import books from './reducers'

const store = createStore(books);

render(
  <Provider store={store}>
    <BookList />
  </Provider>,
  document.querySelector('.container')
)
