import React from 'react';
import PropTypes from 'prop-types';

import TransactionTr from './TransactionTr';

import s from './TransactionHistory.module.css';


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

TransactionBody.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};


export default TransactionHistory;