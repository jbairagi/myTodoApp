import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import projectApp from './reducers'
import Routes from './components/Routes';
import './App.css';

let store = createStore(projectApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
