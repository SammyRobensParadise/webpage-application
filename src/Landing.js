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
import Navigation from './Navigation';
import App from './App';
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
      BullyMasked,
      NerdyMasked,
      FancyMasked,
      StunningMasked
    ],
    current: 0,
    isNext: true
    };

    this.handleNext =this.handleNext.bind(this);
  };
  //handles carousel onClick...
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
      console.log("index"+index);
      console.log("current state"+this.state.current);
     }
  //click function
  onClick(){
    this.props.onClick(this.props.renderFlags.renderLanding);
 }


  //render function
  render() {
    //create local variable that inherits the current state of class variables...
    let index = this.state.current;
    let isNext= this.state.isNext;
    let src = this.state.Images[index];
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
      rightColumn: 'columnright'

  };
    //generating local variables for use in landing...
    let {EmilyInfo} = this.props;
    let headerPhoto = <img className={localCSSclasses.EmilyBandelPhoto} src={src} alt={src.toString()+isNext}/>
    let nextButton = <button className={localCSSclasses.carouselButton} onClick={this.handleNext} alt="Next Image"></button>
    let exploreButton = <button onClick={this.onClick.bind(this)} className={localCSSclasses.exploreButton}><h3><span>{exploreBtntxt}</span></h3></button>
    let navigationBar = <Navigation/>
    let ebname = <h1 className={localCSSclasses.EmilyBandelName}><span>{EmilyInfo.firstName+" "+EmilyInfo.lastName}</span></h1>
    let ebtitle = <h2 className={localCSSclasses.EmilyBandelTitle}><span>{EmilyInfo.title}</span></h2>
    let location = <h2 className={localCSSclasses.LocationClass}><span>{EmilyInfo.city}, {EmilyInfo.province}</span></h2>
    let seperationBar = <div className={localCSSclasses.SpacerBarStyle}></div>
  
   //set change interval for the carousel
   


    //return function as follows appears physcially to user
    return (
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
    );
  }
}

export default Landing;
