import React from 'react';
import { Grid , Row, Col } from 'react-bootstrap';
import SigninForm from './neighborhoods/blocks/houses/Signin Form.js';


export default class Signin extends React.Component {
      render() {
        return (
          <Grid>
           <Row>
           <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
           <div className="sign-in">
            <SigninForm/>
           </div>
           </Col>
           </Row>
          </Grid>
         )
     }
}
