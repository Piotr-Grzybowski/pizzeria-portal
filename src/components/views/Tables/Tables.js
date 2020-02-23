import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <ul>
      <li><Link to={`${process.env.PUBLIC_URL}/tables/booking/abc123`}>New booking with id abc123</Link></li>
      <li><Link to={`${process.env.PUBLIC_URL}/tables/event/abc123`}>New event with id abc123</Link></li>
    </ul>
  </div>
);

export default Tables;