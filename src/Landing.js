import React, { Component } from 'react';
import inkstain from './inkstain.svg';
import Navigation from './Navigation';
import './Landing.css';
import './App.css';
import './inkstain.svg';
import { Container, Row, Col } from 'reactstrap';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = { Images:[
      
    ],
    current: 0,
    isNext: true
    };
  };
  render() {
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
