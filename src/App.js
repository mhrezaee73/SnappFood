import React, { Component } from 'reactn';
import { Boot } from './mycomponent';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Boot>
        <Router />
      </Boot>
    );
  }
}

export default App;
