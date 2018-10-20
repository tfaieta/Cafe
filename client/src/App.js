import React, { Component } from 'react';
import './App.scss';
import Main from './components/Main/Main';

class App extends Component {
  constructor() {
    super();
    this.switchColor = this.switchColor.bind(this)
    this.state = {
        switchColor: false,
        users: []
    }
}

switchColor() {
    this.setState({
        switchColor: !this.state.switchColor
    })
}

render() {
    return (
      <div className={this.state.switchColor ? "" : "sepia"}>
        <Main/>
      </div>
    );
  }
}

export default App;
