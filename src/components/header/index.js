import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './styles.css';

export class Header extends Component {

  static propTypes = {
    sayHi: PropTypes.func.isRequired
  };

  componentDidMount() {
    // dispatch the actions in did mount life cycle
    this.props.sayHi();
  }

  render() {
    return (
      <nav className={classes.headerContainer}>
        <span className={classes.headerOption}>About Me</span>
      </nav>
    );
  }
}

export default Header;
