import React from 'react';
import styles from './BookingEvent.scss';
import { useParams } from 'react-router-dom';

const BookingEvent = () => (
  <div className={styles.component}>
    <h2>Single booking or single event view</h2>
    <p>Id this event or booking is { useParams().id }</p>
  </div>
);

export default BookingEvent;