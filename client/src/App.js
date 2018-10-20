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

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  switchColor() {
      this.setState({
          switchColor: !this.state.switchColor
      })
  }

  render() {
      return (
      <div className={this.state.switchColor ? "" : "sepia"}>
        {/* TESTS API
          <div style={{justifyContent: "center", alignItems: "center",  marginTop: 35}}>>
          <p>USERS</p>
          <ul> {
            this.state.users.map(user =>
              <li key={user.id}>{user.username}</li>
            )}
          </ul>
        </div> */}
        <Main/>
      </div>
  );
  }
}

export default App;
