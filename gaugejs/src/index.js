import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gauge from './Gauge';

ReactDOM.render(
  <React.StrictMode>
    <Gauge progress={90} threshold={75} />
  </React.StrictMode>,
  document.getElementById('root')
);