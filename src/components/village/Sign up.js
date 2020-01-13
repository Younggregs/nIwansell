import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import SignupForm from './neighborhoods/blocks/houses/Signup Form.js';


export default class Signup extends React.Component {
      render() {
        return (
          <div className="sign-in">
          <Container>
           <Row className="justify-content-md-center">
           <Col lg={6} md={6} sm={12} xs={12}>
           <div className="sign-up">
            <SignupForm/>
           </div>
           </Col>
           </Row>
          </Container>
          </div>
         )
     }
}
