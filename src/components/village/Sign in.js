import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import SigninForm from './neighborhoods/blocks/houses/Signin Form.js';


export default class Signin extends React.Component {
      render() {
        return (
          <div className="sign-in">
          <Container>
           <Row className="justify-content-md-center">
           <Col lg={6} md={6} sm={12} xs={12}>
           <div className="sign-in">
            <SigninForm/>
           </div>
           </Col>
           </Row>
          </Container>
          </div>
         )
     }
}
