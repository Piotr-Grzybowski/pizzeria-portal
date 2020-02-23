import React from 'react';
// import {NavLink, Link} from 'react-router-dom';
import styles from './Header.module.scss';
import Icon from '../../common/Icon/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PageNav from '../PageNav/PageNav';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={3} lg={2}>
              <PageNav />
            </Col>
            <Col md={3} lg={2}>
              <div className={styles.contact}>
                <Icon name='phone' /><span>678.243.8455</span>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
