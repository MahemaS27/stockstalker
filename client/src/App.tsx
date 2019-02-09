import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlpacaTable from './AlpacaTable';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <Container>
            <AlpacaTable></AlpacaTable>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
