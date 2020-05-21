import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PollutersUtil from './util/polluters.util';

const polluters = PollutersUtil.getPolluters();

ReactDOM.render(
  // need to remove StrictMode tags as Material UI not caught up with latest React
  <App polluters={polluters} />,
  document.getElementById('root'),
);
