import React from 'react';
import { Grid , Row, Col } from 'react-bootstrap';
import Navigation from './neighborhoods/Navigation.js';
import EditProfileForm from './neighborhoods/blocks/houses/EditProfile Form.js';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';


export default class EditProfile extends React.Component {
      render() {
        return (
        <section className="edit-profile">
          <Navigation logged_in={true} profile_id= {this.props.match.params.profile_id}/>
          <Grid>
           <br /><Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <EditProfileForm profile_id= {this.props.match.params.profile_id}/>
            </Col>
          </Row><br /><br />
         </Grid>
          <GotoTop/>
          <Footer/>
          <Copyright/>
        </section>
         )
     }
}
