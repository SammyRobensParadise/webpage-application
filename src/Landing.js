import React, { Component } from 'react';
import inkstain from './inkstain.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class Landing extends Component {
  render() {
    return (
      <div className="App">
      <Row className="int-stain-top-row">
      <Col>
      <img src={inkstain} className="ink-stain-top" alt="logo" />
      </Col>
      </Row>

        <header className="App-header">

        <p>sample test</p>
        </header>
      </div>
    );
  }
}

export default Landing;
