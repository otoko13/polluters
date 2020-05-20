import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PollutersUtil from './util/polluters.util';

const polluters = PollutersUtil.getPolluters();

ReactDOM.render(
  <React.StrictMode>
    <App polluters={polluters} />
  </React.StrictMode>,
  document.getElementById('root'),
);
