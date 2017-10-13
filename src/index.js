import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import todoApp from './reducers'
import HomePage from './components/homePage'
import './App.css';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
)
