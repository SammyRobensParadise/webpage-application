/*___________________________________________
SOURCE CODE ASSET OF SAMUEL ROBENS-PARADISE © 2018-2019
DISTRIBUTION OF CODE WITHOUT WRITTEN CONSENT OF
SAMUEL ROBENS-PARADISE IS PROHIBITED UNLESS
ACCESSED THROUGH PUBLIC DOIMAIN SUCH AS GITHUB
OR ANY OTHER OPEN SOURCE PLATFORM ON WHICH ASSET
WAS PUBLISHED WITH AUTHOR CONSENT
________________________________________________
*/
import React, { Component } from 'react';
//import anime from 'animejs'
import Navigation from './Navigation';
import './Landing.css';
import './App.css';
import './assets/inkstain.svg';
import './assets/nextArrowBefore.svg'
import './assets/nextArrowAfter.svg'
import BullyMasked from './img/BullyMasked.png';
import NerdyMasked from './img/NerdyMasked.png';
import FancyMasked from './img/FancyMasked.png';
import StunningMasked from './img/StunningMasked.png';
import { Container, Row, Col } from 'reactstrap';

class Landing extends Component {
  //landing constructor...
  constructor(props){
    super(props);
    this.state = { Images:[
      'Loading Image...',
      'loading Image...',
      'loading Image...',
      'loading Image...'
    ],
    current: 0,
    isNext: false,
    displayFilm: true,
    showImage: false,
    navigationFlagIntermediateProfile: false,
    navigationFlagIntermediateContact: false,
    navigationHookIntermediateString: "null",
    timer: 0,
    handleNexClicked: false,
    exploreClicked: false
    };

    this.handleNext =this.handleNext.bind(this);
    this.sendFlag = this.sendFlag.bind(this);
  };
  //ensure that the components correctly render calling component did mount
  componentDidMount(){
    setTimeout( () => {
      this.setState({
        Images: [
          BullyMasked,
          NerdyMasked,
          FancyMasked,
          StunningMasked
          ],
          showImage: true,
          exploreHook: "explore"
      });
   }, 3000);
  };

  //get date to use to compare current time 
  _getDate = () => {
    var currentDate = new Date();
    let localTimer = currentDate.getSeconds();
    if (localTimer > 50) {
      localTimer = currentDate.getSeconds() - 50;
    }
    this.setState({
      timer: localTimer
    });
    console.log("getDateCalled " + this.state.timer);
  };
  get getDate() {
    return this._getDate;
  }
  set getDate(value) {
    this._getDate = value;
  }


  //handles carousel arrow onClick...
   handleNext(){
     let index = this.state.current,
     length  = this.state.Images.length-1;
     if(index === length){
       index = -1;
     }
      index = index+1;

      this.setState({
        current: index,
        isNext: true
      });
     }
  
     _completeTransition = () => {
    setTimeout(() => {
      this.handleNext();
      console.log("transitioning...");
    }, 5000);
  }; 
  get completeTransition() {
    return this._completeTransition;
  }
  set completeTransition(value) {
    this._completeTransition = value;
  }

  //click function
  _sendFlag = () => {
    if (!this.state.displayFilm) {
      this.setState({
        displayFilm: true,
        exploreClicked: true
      });
    }
    this.props.renderStatus(this.state.displayFilm);
    this.props.getRenderHook(this.state.exploreHook);
  }; 
  get sendFlag() {
    return this._sendFlag;
  }
  set sendFlag(value) {
    this._sendFlag = value;
  }

  _receiveFlagFromNavProfile = (renderFlag) => {
    setTimeout(() => {
      if (this.state.navigationFlagIntermediateProfile === false || this.state.navigationFlagIntermediateProfile !== true) {
        this.setState({
          navigationFlagIntermediateProfile: renderFlag
        });
      }
      console.log("is this receivned in profile? " + this.state.navigationFlagIntermediateProfile);
      this.props.getrenderProfile(this.state.navigationFlagIntermediateProfile);
    }, 500);
  };
  get receiveFlagFromNavProfile() {
    return this._receiveFlagFromNavProfile;
  }
  set receiveFlagFromNavProfile(value) {
    this._receiveFlagFromNavProfile = value;
  }

   _receiveFlagFromNavContact = (renderFlag) => {
    setTimeout(() => {
      if (this.state.navigationFlagIntermediateContact === false || this.state.navigationFlagIntermediateContact !== true) {
        this.setState({
          navigationFlagIntermediateContact: renderFlag
        });
      }
      console.log("is this received in contact? " + this.state.navigationFlagIntermediateContact);
      this.props.getrenderContact(this.state.navigationFlagIntermediateContact);
    }, 500);
  };
  get receiveFlagFromNavContact() {
    return this._receiveFlagFromNavContact;
  }
  set receiveFlagFromNavContact(value) {
    this._receiveFlagFromNavContact = value;
  }

   _receiveHookfromNavigation = (renderFlag) => {
    setTimeout(() => {
      let boolCheck = this.state.navigationHookIntermediateString;
      if (boolCheck === 'null' || boolCheck !== 'profile' || boolCheck !== 'contact' || boolCheck !== 'explore') {
        this.setState({
          navigationHookIntermediateString: renderFlag
        });
      }
      console.log("what is recevied in hook from naviagtion? " + this.state.navigationHookIntermediateString);
      this.props.getRenderHook(this.state.navigationHookIntermediateString);
    }, 500);
  };
  get receiveHookfromNavigation() {
    return this._receiveHookfromNavigation;
  }
  set receiveHookfromNavigation(value) {
    this._receiveHookfromNavigation = value;
  }
  //render function
  render() {
    //create local variable that inherits the current state of class variables...
    let index = this.state.current;
    let isNext= this.state.isNext;
    var src = this.state.Images[index];
    //generating global variables for use in landing....
    var exploreBtntxt = "Explore"
    //generating local css object...
    var localCSSclasses = {
      background: 'inkstain',
      landingPagetitle: 'herotitle',
      EmilyBandelPhoto: 'EmilyBandelImg',
      carouselButton: 'taverseCarouselbtn',
      exploreButton: 'explore_Contributions_btn',
      EmilyBandelName: 'ebname',
      EmilyBandelTitle: 'ebtitle',
      LocationClass: 'vancouver',
      SpacerBarStyle: 'seperationbar',
      leftColumn: 'columnleft',
      rightColumn: 'columnright',
      localSpinner: 'placespinner'
  };
  
    //generating local variables for use in landing...
    let {EmilyInfo} = this.props;
    let spinnerset = <div className={localCSSclasses.localSpinner}><div className="lds-ellipsis" id='centerspinner'><div></div><div></div><div></div><div></div></div></div>
    let nextButton = <button className={localCSSclasses.carouselButton} onClick={this.handleNext} alt="Next Image"></button>
    let exploreButton = <button onClick={this.sendFlag} className={localCSSclasses.exploreButton}><h3><span>{exploreBtntxt}</span></h3></button>
    let navigationBar = <Navigation navigationFlagIntermediateProfile={this.receiveFlagFromNavProfile} navigationFlagIntermediateContact={this.receiveFlagFromNavContact} navigationHookIntermediate={this.receiveHookfromNavigation}/>
    let ebname = <h1 className={localCSSclasses.EmilyBandelName}><span>{EmilyInfo.firstName+" "+EmilyInfo.lastName}</span></h1>
    let ebtitle = <h2 className={localCSSclasses.EmilyBandelTitle}><span>{EmilyInfo.title}</span></h2>
    let location = <h2 className={localCSSclasses.LocationClass}><span>{EmilyInfo.city}, {EmilyInfo.province}</span></h2>
    let seperationBar = <div className={localCSSclasses.SpacerBarStyle}></div>
    var headerPhoto = <img className={localCSSclasses.EmilyBandelPhoto} onClick={this.handleNext} src={src} alt={src.toString()+isNext+"It looks like some things didn't make the journey from cyber space! Try reloading the webpage"}/>
  
   //set change interval for the carousel
   //

   if(this.state.showImage !== true || this.state.showImage === undefined || this.state.showImage === false){
    //return function as follows appears physcially to user
    return (
     <div className={localCSSclasses.background}>
      {navigationBar}
      <Container>
        <Row>
          <Col className='column1' xs="12" sm="8">{ebname}{ebtitle}<Container>{exploreButton}</Container></Col>
          <Col className='column2' xs="12" sm="4"><div className='ImageContain'>{nextButton}{spinnerset}</div></Col>
        </Row>
        <Row>
          <Col xs="12" sm="12"><Container>{location}</Container></Col>
        </Row>
        </Container>
      {seperationBar}
     </div>
    );
  }
  else if(this.state.showImage === true){
    return(
      <div className={localCSSclasses.background}>
      {navigationBar}
      <Container>
        <Row>
          <Col className='column1' xs="12" sm="8">{ebname}{ebtitle}<Container>{exploreButton}</Container></Col>
          <Col className='column2' xs="12" sm="4"><div className='ImageContain'>{nextButton}{headerPhoto}</div></Col>
        </Row>
        <Row>
          <Col xs="12" sm="12"><Container>{location}</Container></Col>
        </Row>
        </Container>
      {seperationBar}
     </div>
    )
  } else{
    return(
      <div className={localCSSclasses.background}>
      {navigationBar}
      <Container>
        <Row>
          <Col className='column1' xs="12" sm="8">{ebname}{ebtitle}<Container>{exploreButton}</Container></Col>
          <Col className='column2' xs="12" sm="4"><div className='ImageContain'>{nextButton}{headerPhoto}</div></Col>
        </Row>
        <Row>
          <Col xs="12" sm="12"><Container>{location}</Container></Col>
        </Row>
        </Container>
      {seperationBar}
     </div>
    )
  }
  }
}

export default Landing;
