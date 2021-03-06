import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import Navigation from './neighborhoods/Navigation.js';
import BankAccountForm from './neighborhoods/blocks/houses/Bank Account Form.js';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';


export default class BankAccount extends React.Component {
      render() {
        return (
        <section className="edit-profile">
          <Navigation logged_in={true} profile_id= {this.props.match.params.profile_id}/>
          <Container>
           <br /><Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <BankAccountForm profile_id= {this.props.match.params.profile_id}/>
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
