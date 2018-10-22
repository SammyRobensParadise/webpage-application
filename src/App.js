import React, { Component } from 'react';
import inkstain from './inkstain.svg';
import './App.css';
import Navigation from './Navigation';
import Landing from './Landing';
import Filmography from './Filmography';
import Profile from './Profile';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <Landing />
      <Filmography />
      <Profile />
      <Contact />
      <Footer />
      </div>
    );
  }
}

export default App;
