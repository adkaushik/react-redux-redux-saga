import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/header';

import headerActions from './actions/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header
          sayHi={this.props.handleHeaderMount}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleHeaderMount: headerActions.handleHeaderLoad
}

export default connect(null, mapDispatchToProps)(App);
