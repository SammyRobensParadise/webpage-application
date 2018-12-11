import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import './Filmography.css';
import './assets/inkstainfilm.svg';
import StandingRoomOnly from './img/standing_room_only.jpg';
import ATwistedFate from './img/TF_poster.jpg';
import DeathRomantisized from './img/DR_poster.jpg';
import Poignant from './img/P_poster.jpg';
import Wick from './img/Wick_poster.jpg';

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
      },
      movieDescriptions: {
        StandingRoomOnlyDescription: "The interactions among 6 people in line and an Usher outside a movie theater. A short film adaptation of Aren Haun's stage-play, Standing Room Only. Emily plays a gothic character who is the first to arrive in line and camps out in a lawn chair.",
        ATwistedFateDescription: "Two roommates find a book that contains answers to the past, present and future. Riley (played by Emily) is hesitant at first, but eventually she concedes and agrees to read the book in order to find out what happened to her dad. The two end up summoning a demon by mistake. Riley battles the demon in a game of chess both mentally and physically, to get her roommate back and get answers about her dad. ",
        DeathRomantisizedDescription: "Death is played by a women who entices a doctor into killing his patients, but when one patient named Nina (played by Emily), makes a connection with the doctor after he kills her brother, he has to choose between dark and light.",
        PoignantDescription: "Poignant follows a woman who purchases a building to open her own health care center, unaware of the Entity named Maggie that haunts the building (Played by Emily). Maggie was abused and murdered and needs redemption for what happened to her before she can rest in peace.",
        WickDescription: "Wick is a computer game made by Hellbent Games. Emily voices one of the kids who warns against entering the forest at night."
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
      WickCSS: 'wick_CSS',
      localCSSTransitionClasses: {
        contain: 'contain',
        overlay: 'overlay',
        textStyle: 'text'
      }
    }
    let sectionName = <h1 className={localCSSclasses.sectionHeader}><span>{this.state.sectionTitle}</span></h1>
    let sectionMinheader = <h2 className={localCSSclasses.sectionSubHeader}><span>{this.state.sectionDefinition}</span></h2>
    //generating feature components...
    let SRObanner = <img className={localCSSclasses.standingRoomOnly} src={this.state.images.StangingRoomCover} alt ='Standing Room Only'></img>
    let TFbanner = <img className={localCSSclasses.aTwistedFate} src={this.state.images.TwistedFateCover} alt="A Twisted Fate"></img>
    let DRbanner = <img className={localCSSclasses.DeathRomantisizedCSS} src={this.state.images.DeathRomantisizedCover} alt='Death Romantisized'></img>
    let Pbanner = <img className={localCSSclasses.PoignantCSS} src={this.state.images.PoignantCover} al='Poignant'></img>
    let Wickbanner= <img className={localCSSclasses.WickCSS} src={this.state.images.WickCover} alt= "Wick"></img>
    return (
      <div className={localCSSclasses.inkstainBackground}>
      <Container>{sectionName}
      {sectionMinheader}
      </Container>
      <Container>
      <Row>
          <Col xs="12" md="4">
          <Container>
          <div className={localCSSclasses.localCSSTransitionClasses.contain}>
          {SRObanner}
          <div className={localCSSclasses.localCSSTransitionClasses.overlay+" "+localCSSclasses.localCSSTransitionClasses.textStyle}>
          {this.state.movieDescriptions.StandingRoomOnlyDescription}
          </div>
          </div>
          </Container>
          </Col>
          <Col xs="12" md="4"><Container>
            <div className={localCSSclasses.localCSSTransitionClasses.contain}>
            {TFbanner}
            <div className={localCSSclasses.localCSSTransitionClasses.overlay+" "+localCSSclasses.localCSSTransitionClasses.textStyle}>
            {this.state.movieDescriptions.ATwistedFateDescription}
            </div>
            </div>
            </Container></Col>
          <Col xs="12" md="4"><Container>
            <div className={localCSSclasses.localCSSTransitionClasses.contain}>
            {DRbanner}
            <div className={localCSSclasses.localCSSTransitionClasses.overlay+" "+localCSSclasses.localCSSTransitionClasses.textStyle}>
            {this.state.movieDescriptions.DeathRomantisizedDescription}
            </div>
            </div>
            </Container></Col>
        </Row>
        <Row>
          <Col xs="12" md="4"><Container>
            <div className={localCSSclasses.localCSSTransitionClasses.contain}>
            {Pbanner}
            <div className={localCSSclasses.localCSSTransitionClasses.overlay+" "+localCSSclasses.localCSSTransitionClasses.textStyle}>
            {this.state.movieDescriptions.PoignantDescription}
            </div>
            </div>
            </Container></Col>
          <Col xs="12" md="8"><Container>
            <div className={localCSSclasses.localCSSTransitionClasses.contain}>
            {Wickbanner}
            <div className={localCSSclasses.localCSSTransitionClasses.overlay+" "+localCSSclasses.localCSSTransitionClasses.textStyle}>
            {this.state.movieDescriptions.WickDescription}
            </div>
            </div>
            </Container></Col>
        </Row>
        </Container>
      </div>
      
    );
  }
}

export default Filmography;
