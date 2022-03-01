// Importando o React
import React, { Component } from 'react';
import Footer from 'react-materialize';
import Footeer from './components/footer/footeer';
import Header from './components/header/header';
import Main from './main';

 

class App extends Component {

  

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footeer/>
      </div>
    );
  }
}

export default App;