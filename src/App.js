/*___________________________________________
CODE ASSET OF SAMUEL ROBENS-PARADISE © 2018
DISTRIBUTION OF CODE WITHOUT WRITTEN CONSENT OF
SAMUEL ROBENS-PARADISE IS PROHIBITED UNLESS
ACCESSED THROUGH PUBLIC DOIMAIN SUCH AS GITHUB
OR ANY OTHER OPEN SOURCE PLATFORM ON WHICH ASSET
WAS PUBLISHED WITH AUTHOR CONSENT
*/

import React, { Component } from 'react';
import anime from 'animejs'
import './App.css';
import Navigation from './Navigation';
import Landing from './Landing';
import Filmography from './Filmography';
import Profile from './Profile';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: 'Emily',
      lastName: 'Bandel',
      title: 'Actress',
      city: 'Vancouver',
      province: 'British Columbia',
      provinceAbrev: "BC",
      bioPic: 'Emily Bandel is an actress who grew up in Portland, Oregon performing in theatre. She moved to Vancouver BC for high school and began pursuing film and tv while continuing to study theatre in school. Emily has performed in many different feature and short films that have premiered in Canada and the US, as well as local music videos and video games. She enjoys playing characters that are spooky, dark and as far from herself as possible - the crazier the better.',
      renderFlags: {
        //Landing render is true on construction so that no logic is required to render the webpage, component will render by themselves
        renderLanding: true,
        //by defailt the following compnents do not render
        renderFilmography: false,
        renderProfile: false,
        renderContact: false,
        renderFooter: false
      }
    }  
    };
  render() {
    return (
      <div className="App">
      <Landing onClick={this.onClick} EmilyInfo={this.state} renderStatus={this.state.renderFlags.renderLanding} />
      <Filmography renderStatus={this.state.renderFlags.renderFilmography} />
      <Profile EmilyInfo={this.state} renderStatus={this.state.renderFlags.renderProfile} />
      <Contact renderStatus={this.state.renderFlags.renderContact} />
      <Footer renderStatus={this.state.renderFlags.renderFooter}/>
   </div>
    );
  }
}

export default App;
