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
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import './Profile.css';
import './assets/inkstainprofile.svg';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoLink: "https://player.vimeo.com/video/300380587",
      sectionTitle: 'Profile',
      sectionDefinition: 'The backstory to Emily Bandel',
      videoDescription: "Emily's reel"
    }
  }
  render() {
    //generating local css classes...
    var localCSSclasses = {
      inkstainBackground: 'inkstainbottom',
      sectionHeader: 'sectionheader',
      sectionSubHeader: 'sectionsubheader',
      vimeoVideoFormat: 'vimeovideoformat',
      vimeoVideoInternal: 'vimeovideo_outer',
      EmilyBandelBioPic: 'emilybandelbiopic'
    }
    //generating props from parent class...
    let {EmilyInfo} = this.props;
    //generating local html elements...
    let sectionName = <h1 className={localCSSclasses.sectionHeader}><span>{this.state.sectionTitle}</span></h1>
    let sectionMinheader = <h2 className={localCSSclasses.sectionSubHeader}><span>{this.state.sectionDefinition}</span></h2>
    let EmilyReel = <h2 className={localCSSclasses.sectionSubHeader}><span>{this.state.videoDescription}</span></h2>
    return (
      <div className={localCSSclasses.inkstainBackground}>
      <Container>
        {sectionName}
        {sectionMinheader}
        {EmilyReel}
      </Container>
      <Container>
      <Row>
        <Col xs="0" sm="1"></Col>
          <Col xs="12" sm="10">
          <Container>
          <div className={localCSSclasses.vimeoVideoInternal}><iframe title="Emily Bandel Reel" src="https://player.vimeo.com/video/300380587" className={localCSSclasses.vimeoVideoFormat} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          </Container>
          </Col>
          <Col xs="0" sm="1"></Col>
        </Row>
        <Row>
          <Col xs="12" sm="12"><div className={localCSSclasses.EmilyBandelBioPic}>{EmilyInfo.bioPic}</div></Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Profile;
