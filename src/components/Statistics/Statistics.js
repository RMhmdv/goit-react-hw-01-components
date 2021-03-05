import React from 'react';
import PropTypes from 'prop-types';

import StatListItem from './StatListItem';


import s from './Statistics.module.css';


const StatsList = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <ul className={s.statList}>
      {items.map(StatListItem)}
    </ul>
  )
}

const Statistics = ({items}) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <StatsList items={items} />

    </section>
  );
};

StatsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};



export default Statistics;
