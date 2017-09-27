import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TODOApp from './App';
import registerServiceWorker from './registerServiceWorker';

// let TASKS = [
//   {id: '1', task: 'learn React'},
//   {id: '2', task: 'apply React'}
// ];

ReactDOM.render(<TODOApp />, document.getElementById('root'));
registerServiceWorker();
