import React from 'react';

import s from './TransactionHistory.module.css';


const TransactionTr = ({ id, type, amount, currency }) => {
  return (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>

  )
}

const TransactionBody = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <tbody className={s.tbody}>
      {items.map(TransactionTr)}
    </tbody>
  )
};


const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionBody items={transactions} />
    </table>
  )
};



export default TransactionHistory;