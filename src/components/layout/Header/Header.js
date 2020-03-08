import React from "react";
// import {NavLink, Link} from 'react-router-dom';
import styles from "./Header.module.scss";
import PageNav from "../PageNav/PageNav";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <PageNav />
      </header>
    );
  }
}

export default Header;
