import React from 'react';
import ReactDOM from 'react-dom';
import TODOApp from './TODOApp';
import registerServiceWorker from './registerServiceWorker';

let TASKS = [
  {id: 1, task: 'learn React'},
  {id: 2, task: 'apply React'}
];

ReactDOM.render(<TODOApp tasks={TASKS} />, document.getElementById('root'));
registerServiceWorker();
