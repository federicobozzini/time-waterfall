import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { World } from './World';
import { Timer } from './Timer';
import { times } from './utilities';
import { Random } from './Random';

const params = new URLSearchParams(window.location.search);
const isTest = params.has('test');
const seed = isTest ? 'test' : undefined;
const initialRuns = 1500;
const timer = new Timer();
const random = new Random(seed);
const world = new World(timer, random);
times(initialRuns, () => timer.tick());

if (!isTest) {
  timer.start();
}

ReactDOM.render(<App world={world} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
