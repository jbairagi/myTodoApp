import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStores';
import Routes from './routes';
import './App.css';

let store = configureStore();

render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root')
);
