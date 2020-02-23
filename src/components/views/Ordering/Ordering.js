import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <ul>
      <li><Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Link></li>
      <li><Link to={`${process.env.PUBLIC_URL}/ordering/order/123abc`}>Order with id 123abc</Link></li>
    </ul>
  </div>
);

export default Ordering;