import React from 'react';


// import './App.css';

import Profile from './Profile';
import FriendList from './FriendList';
import Statistics from './Statistics';
import TransactionHistory from './TransactionHistory';

import userData from './data/user.json';
import statsData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';



const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </>
  )
}

export default App;
