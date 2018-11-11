import React, { Component } from 'react';
import './App.css';
import './Filmography.css';
import App from './App';
import './assets/inkstainfilm.svg';
import { Container, Row, Col } from 'reactstrap';

class Filmography extends Component {
  constructor(props){
    super(props);
    this.state = {
      sectionTitle: 'Filmography',
      sectionDefinition: 'A collection of works, films and screenings ft. Emily Bandel'
    }
  }
  render() {
    //generating local css classes object...
    var localCSSclasses = {
      inkstainBackground: 'inkstainmiddle',
      sectionHeader: 'sectionheader',
      sectionSubHeader: 'sectionsubheader' 
    }
    let {EmilyInfo} = this.props;
    let sectionName = <h1 className={localCSSclasses.sectionHeader}><span>{this.state.sectionTitle}</span></h1>
    let sectionMinheader = <h2 className={localCSSclasses.sectionSubHeader}><span>{this.state.sectionDefinition}</span></h2>
    return (
      <div className={localCSSclasses.inkstainBackground}>
      {sectionName}
      {sectionMinheader}
      <Row>
          <Col xs="6" sm="4"><Container>.col-6 .col-sm-4</Container></Col>
          <Col xs="6" sm="4"><Container>.col-6 .col-sm-4</Container></Col>
          <Col sm="4"><Container>.col-sm-4</Container></Col>
        </Row>
      </div>
      
    );
  }
}

export default Filmography;
