import React from 'react';
import styles from './Order.scss';
import { useParams } from 'react-router-dom';

const Order = () => (
  <div className={styles.component}>
    <h2>Order view</h2>
    <p>Id this order is {useParams().id}</p>
  </div>
);

export default Order;