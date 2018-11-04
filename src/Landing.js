import React, { Component } from 'react';
import Navigation from './Navigation';
import './Landing.css';
import './App.css';
import './assets/inkstain.svg';
import BullyMasked from './img/BullyMasked.png';
import NerdyMasked from './img/NerdyMasked.png';
import FancyMasked from './img/FancyMasked.png';
import StunningMasked from './img/StunningMasked.png';
import { Container, Row, Col } from 'reactstrap';

class Landing extends Component {
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
  render() {

    let index = this.state.current;
    let isNext= this.state.isNext;
    let src = this.state.Images[index];
    //generating local variables for use in landing....
    var name = "Emily Bandel";
    var title = "Actress";
    var exploreBtntxt = "Explore"
    var city = "Vancouver";
    var province = "BC";
    let headerPhoto = <img className="EmilyBandelImg" src={src} alt={src.toString()+isNext}/>
    let nextButton = <button className="taverseCarouselbtn" onClick={this.handleNext} alt="Next Image">click here</button>

    return (
     <div className="inkstain">
      <Navigation />
      <Row className="herotitle">
      <Col xs="4" className="heroleft">
      <Container>
      <h1 className="ebname"><span>{name}</span></h1>
      <h2 className="ebtitle"><span>{title}</span></h2>
      <button className="explore_Contributions_btn"><h3><span>{exploreBtntxt}</span></h3></button>
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
