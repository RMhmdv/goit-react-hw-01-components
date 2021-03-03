import React from 'react';

import s from './Statistics.module.css';

const randomColor = () => {
  const random = () => Math.floor(Math.random() * 256);

  return `rgba( ${random()} , ${random()} , ${random()} )`;
};

const StatListItem = ({id, label, percentage }) => {
  return (
    <li className={s.item}
            key={id}
            style={{ backgroundColor: randomColor() }}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
    </li>
  )

}

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

export default Statistics;
