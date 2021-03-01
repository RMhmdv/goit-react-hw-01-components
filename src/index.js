import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';


export { default } from './Profile';
export { default } from './FriendList';
export { default } from './Statistics';
export { default } from './TransactionHistory';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

