import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { World } from './World';
import { Timer } from './Timer';
import { times } from './utilities';

const initialRuns = 1500;
const timer = new Timer();
const world = new World(timer);
times(initialRuns, () => timer.tick());
timer.start();

ReactDOM.render(<App world={world}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
