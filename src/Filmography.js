import React, { Component } from 'react';
import './App.css';
import './Filmography.css';
import App from './App';
import './assets/inkstainfilm.svg';
import StandingRoomOnly from './img/standing_room_only.jpg';
import ATwistedFate from './img/TF_poster.jpg';
import DeathRomantisized from './img/DR_poster.jpg';
import Poignant from './img/P_poster.jpg';
import Wick from './img/Wick_poster.jpg';
import { Container, Row, Col } from 'reactstrap';

class Filmography extends Component {
  constructor(props){
    super(props);
    this.state = {
      sectionTitle: 'Filmography',
      sectionDefinition: 'A collection of works, films and screenings ft. Emily Bandel',
      images: {
        StangingRoomCover: StandingRoomOnly,
        TwistedFateCover: ATwistedFate,
        DeathRomantisizedCover: DeathRomantisized,
        PoignantCover: Poignant,
        WickCover: Wick
      }
    }
  }
  render() {
    //generating local css classes object...
    var localCSSclasses = {
      inkstainBackground: 'inkstainmiddle',
      sectionHeader: 'sectionheader',
      sectionSubHeader: 'sectionsubheader',
      standingRoomOnly: 'standing_room_only_image',
      aTwistedFate: 'a_twisted_fate',
      DeathRomantisizedCSS: 'death_romantasized',
      PoignantCSS: 'Poingnant_CSS',
      WickCSS: 'wick_CSS'
    }
    let {EmilyInfo} = this.props;
    let sectionName = <h1 className={localCSSclasses.sectionHeader}><span>{this.state.sectionTitle}</span></h1>
    let sectionMinheader = <h2 className={localCSSclasses.sectionSubHeader}><span>{this.state.sectionDefinition}</span></h2>
    //generating feature components...
    let SRObanner = <img src={this.state.images.StangingRoomCover} alt ='Standing Room Only'></img>
    let TFbanner = <img src={this.state.images.TwistedFateCover} alt="A Twisted Fate"></img>
    let DRbanner = <img src={this.state.images.DeathRomantisizedCover} alt='Death Romantisized'></img>
    let Pbanner = <img src={this.state.images.PoignantCover} al='Poignant'></img>
    let Wickbanner= <img src={this.state.images.WickCover} alt= "Wick"></img>
    return (
      <div className={localCSSclasses.inkstainBackground}>
      {sectionName}
      {sectionMinheader}
      <Row>
          <Col xs="6" sm="4"><Container><div className={localCSSclasses.standingRoomOnly}>{SRObanner}</div></Container></Col>
          <Col xs="6" sm="4"><Container><div className={localCSSclasses.aTwistedFate}>{TFbanner}</div></Container></Col>
          <Col sm="4"><Container><div className={localCSSclasses.DeathRomantisizedCSS}>{DRbanner}</div></Container></Col>
        </Row>
        <Row>
          <Col xs="4"><Container><div className={localCSSclasses.PoignantCSS}>{Pbanner}</div></Container></Col>
          <Col xs="8"><Container><div className={localCSSclasses.WickCSS}>{Wickbanner}</div></Container></Col>
        </Row>
      </div>
      
    );
  }
}

export default Filmography;
