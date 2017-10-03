import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import TODOApp from './components/TODOApp'

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

render(
  <Provider store={store}>
    <TODOApp />
  </Provider>,
  document.getElementById('root')
)
