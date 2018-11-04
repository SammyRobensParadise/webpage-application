/*___________________________________________
CODE ASSET OF SAMUEL ROBENS-PARADISE © 2018
DISTRIBUTION OF CODE WITHOUT WRITTEN CONSENT OF
SAMUEL ROBENS-PARADISE IS PROHIBITED UNLESS
ACCESSED THROUGH PUBLIC DOIMAIN SUCH AS GITHUB
OR ANY OTHER OPEN SOURCE PLATFORM ON WHICH ASSET
WAS PUBLISHED WITH AUTHOR CONSENT
*/
import React, { Component } from 'react';
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
     }
  //render function
  render() {
    //create local variable that inherits the current state of class variables...
    let index = this.state.current;
    let isNext= this.state.isNext;
    let src = this.state.Images[index];
    //generating global variables for use in landing....
    var name = "Emily Bandel";
    var title = "Actress";
    var exploreBtntxt = "Explore"
    var city = "Vancouver";
    var province = "BC";
    //generating local variables for use in landing...
    let headerPhoto = <img className="EmilyBandelImg" src={src} alt={src.toString()+isNext}/>
    let nextButton = <div className="taverseCarouselbtn" onClick={this.handleNext} alt="Next Image"></div>
    let exploreButton = <button className="explore_Contributions_btn"><h3><span>{exploreBtntxt}</span></h3></button>
    //return function as follows appears physcially to user
    return (
     <div className="inkstain">
      <Navigation />
      <Row className="herotitle">
      <Col xs="4" className="heroleft">
      <Container>
      <h1 className="ebname"><span>{name}</span></h1>
      <h2 className="ebtitle"><span>{title}</span></h2>
      {exploreButton}
      </Container>
      </Col>
      <Col xs="4">
      </Col>
      <Col xs="4"className="heroright">
      <Container>
      {headerPhoto}
      {nextButton}
      </Container>
      </Col>
      </Row> 
     <Container><Row className="vancouver">
      <Col xs="12"><h2><span>{city}, {province}</span></h2></Col>
      </Row>
      </Container>
      
      <Container>
      <Row>
        <Col>
        <div className="seperationbar"></div>
        </Col>
      </Row>
      </Container>
     </div>
    );
  }
}

export default Landing;
