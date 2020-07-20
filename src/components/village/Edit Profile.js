import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';

import loadable from '@loadable/component'

const Navigation = loadable(() => import('./neighborhoods/Navigation.js'))
const EditProfileForm = loadable(() => import('./neighborhoods/blocks/houses/EditProfile Form.js'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))


export default class EditProfile extends React.Component {
      render() {
        return (
        <section className="edit-profile">
          <Navigation logged_in={true} profile_id= {this.props.match.params.profile_id}/>
          <Container>
           <br /><Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <EditProfileForm profile_id= {this.props.match.params.profile_id}/>
            </Col>
          </Row><br /><br />
         </Container>
          <GotoTop/>
          <Footer/>
          <Copyright/>
        </section>
         )
     }
}
