import React from 'react';
import PropTypes from 'prop-types';


import s from './StatListItem.module.css';

const randomColor = () => {
  const random = () => Math.floor(Math.random() * 256);

  return `rgba( ${random()} , ${random()} , ${random()} )`;
};

const StatListItem = ({ id, label, percentage }) => {
  return (
    <li className={s.item}
      key={id}
      style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  )
};

StatListItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}


export default StatListItem;
