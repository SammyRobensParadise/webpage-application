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
import './Footer.css';
import instaLogo from './assets/instagram.svg';
import moviereel from './assets/moviereel.svg';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      privacyPolicy: "#",
      instagramLink: 'https://www.instagram.com/emilybandel/?hl=en',
      IMDBLink: 'https://www.imdb.com/name/nm6818003/',
      instagramLogo: instaLogo,
      IMDBLogo: moviereel
    }
  }
  render() {
    var localCSSclasses = {
      background: 'footerbackground',
      socialLinks: 'sociallink'

    }
    return (
      <div className={localCSSclasses.background}>
      <Container>
        <Row>
          <Col xs="6" sm="6"><a  href={this.state.instagramLink} target='blank_'><img className={localCSSclasses.socialLinks} src={this.state.instagramLogo} alt="instagram"></img></a></Col>
          <Col xs="6" sm="6"><a  href={this.state.IMDBLink} target='blank_'><img className={localCSSclasses.socialLinks} src={this.state.IMDBLogo} alt='IMDB'></img></a></Col>
        </Row>
      </Container>
      </div>
      
    );
  }
}

export default Footer;
