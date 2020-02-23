import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => (
  <div>
    <Header />
    <main className={styles.component}>
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
