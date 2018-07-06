import React from 'react'
import { Grid , Row, Col } from 'react-bootstrap'
import ForgotPasswordForm from './neighborhoods/blocks/houses/Forgot Password Form'

export default class ForgotPassword extends React.Component {
      render() {
        return (
           <div className="forgot-password">
            <Grid>
              <Row>
                <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                    <ForgotPasswordForm/>
                </Col>
              </Row>
            </Grid>
           </div>
         )
     }
}
