/*___________________________________________
CODE ASSET OF SAMUEL ROBENS-PARADISE © 2018
DISTRIBUTION OF CODE WITHOUT WRITTEN CONSENT OF
SAMUEL ROBENS-PARADISE IS PROHIBITED UNLESS
ACCESSED THROUGH PUBLIC DOIMAIN SUCH AS GITHUB
OR ANY OTHER OPEN SOURCE PLATFORM ON WHICH ASSET
WAS PUBLISHED WITH AUTHOR CONSENT
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import Navigation from './Navigation';
import Landing from './Landing';
import Filmography from './Filmography';
import Profile from './Profile';
import Contact from './Contact';
import Footer from './Footer';
import scrollToComponent from 'react-scroll-to-component';


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
  
        //Landing render is true on construction so that no logic is required to render the webpage, component will render by themselves
        renderLanding: true,
        //by defailt the following compnents do not render
        renderFilmography: false,
        renderProfile: false,
        renderContact: false,
        renderFooter: false
    } 
    this.LandingRef = React.createRef()
    this.filmographyRef = React.createRef();
    this.profileRef = React.createRef();
    this.contactRef = React.createRef();
    this.footerRef = React.createRef();
    
    this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this);
    };
    displayFilmography = (renderflag) => {
      setTimeout( () => {
      if(this.state.renderFilmography === false || this.state.renderFilmography !== true || this.state.renderFilmography === true){
        this.setState({
        renderFilmography: renderflag
      });
    }
    console.log("inside of sync "+this.state.renderFilmography)
  }, 1000);
  };

  displayProfile = (renderFlag) => {
    setTimeout( () => {
      if(this.state.renderProfile === false || this.state.renderProfile !==true || this.state.renderProfile === true){
        this.setState({
          renderProfile: renderFlag
        });
      }
      console.log("status of render profile"+ this.state.renderProfile);
    }, 500)
  }

  displayContact = (renderFlag) => {
    setTimeout( () => {
      if(this.state.renderContact === false || this.state.renderContact !== true || this.state.renderContact === true){
        this.setState({
          renderContact: renderFlag
        });
      }
      console.log("status of render contact" + this.state.renderContact);
    }, 500)
  }
  componentDidMount(){
    scrollToComponent(this.refs.Violet, {offset: 0, align: 'middle', duration: 500});

  };
  componentWillUnmount(){

    console.log("unmount");
  };

  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500});
    scroller.on('end', () => console.log('Scrolling end!') );
  }

  componentDidUpdate(){
    setTimeout( () => {
    console.log("componentdidupdate called: film: " + this.state.renderFilmography + "   profile: "+ this.state.renderProfile+ "   contact: " + this.state.renderContact);
    var scrollNode = null;
    if(this.state.renderFilmography === true || this.state.renderFilmography !== false){
      scrollNode = ReactDOM.findDOMNode(this.refs.film);
      if(scrollNode === null){
        scrollNode.scrollIntoView(false);
      }
      else{
      scrollNode.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
      console.log("rendering filmography...");
      }
    } 
   else if(this.state.renderProfile === true || this.state.renderProfile !== false){
      scrollNode = ReactDOM.findDOMNode(this.refs.profile);
      if(scrollNode === null){
        scrollNode.scrollIntoView(false);
      }else{
        scrollNode.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
      }
    } 
    else if(this.state.renderContact === true || this.state.renderContact !== false){
      scrollNode = ReactDOM.findDOMNode(this.refs.contact);
      if(scrollNode === null){
        scrollNode.scrollIntoView(false);
      }else {
        scrollNode.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
      }
    }else {
      scrollNode = ReactDOM.findDOMNode(this.refs.landing);
      scrollNode.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
    }
  },1000);
  }

  render() {
   
    
    return (
      <div className="App" >
      <Landing ref="landing" EmilyInfo={this.state} renderStatus={this.displayFilmography} getrenderProfile={this.displayProfile} getrenderContact={this.displayContact} />
      <Filmography ref="film" renderStatus={this.state.renderFilmography} />
      <Profile ref="profile" EmilyInfo={this.state} renderStatus={this.state.renderProfile} />
      <Contact ref="contact" renderStatus={this.state.renderContact} />
      <Footer ref={this.footerRef} renderStatus={this.state.renderFooter}/>
   </div>
    );
  }
  scrollToRef = () => { // run this method to execute scrolling. 
}
}

export default App;
