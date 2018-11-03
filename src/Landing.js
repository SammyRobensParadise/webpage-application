import React, { Component } from 'react';
import Navigation from './Navigation';
import './Landing.css';
import './App.css';
import './inkstain.svg';
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
    current: 0
    };
  };
  getImgNumSize(props){
      var imgNum = this.state.Images.length;
      return imgNum;
    };
  getCurrentImg(props){
    return this.setCurrentImg();
  };
  setCurrentImg(props){
    //checking to see if the current value is that of first element in the array
    var defaultCurrent = this.state.current;
    var num = this.getImgNumSize()-this.getImgNumSize();
    if (defaultCurrent === num ){
      return this.state.Images[num].toString();
    }
  };
  handleNext(props){

  };
  render() {
    var name = "Emily Bandel";
    let headerPhoto = <img className="EmilyBandelImg" src={this.getCurrentImg()} alt={name+this.getCurrentImg()}/>
    //let nextButton = <div className="taverseCarouselbtn" onClick={this.setCurrentImg()} alt="Next Image"></div>

    return (
     <div className="inkstain">
      <Navigation />
      <Row className="herotitle">
      <Col xs="4" className="heroleft">
      <Container>
      <h1 className="ebname"><span>Emily Bandel</span></h1>
      <h2 className="ebtitle"><span>Actress</span></h2>
      <button className="explore_Contributions_btn"><h3><span>Explore</span></h3></button>
      </Container>
      </Col>
      <Col xs="4">
      </Col>
      <Col xs="4"className="heroright">
      <Container>
      {headerPhoto}
      </Container>
      </Col>
      </Row> 
     <Container><Row className="vancouver">
      <Col xs="12"><h2><span>Vancouver, BC</span></h2></Col>
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
