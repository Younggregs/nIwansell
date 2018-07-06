import React from 'react'
import { Grid , Row, Col } from 'react-bootstrap'
import ResetPasswordForm from './neighborhoods/blocks/houses/Reset Password Form'

export default class ResetPassword extends React.Component {
      render() {
        return (
           <div className="forgot-password">
            <Grid>
              <Row>
                <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                    <ResetPasswordForm reset_code= {this.props.match.params.reset_code}/>
                </Col>
              </Row>
            </Grid>
           </div>
         )
     }
}
