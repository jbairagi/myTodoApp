import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import LoginPage from './components/loginPage'

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <LoginPage />
  </Provider>,
  document.getElementById('root')
)
