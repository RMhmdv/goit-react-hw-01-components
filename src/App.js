import React from 'react';


import './App.css';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

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

      <Statistics title="Upload stats" items={statsData} /> 
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  )
}

export default App;
