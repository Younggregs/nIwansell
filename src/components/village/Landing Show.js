import React from 'react'
import { Grid,Row,Col } from 'react-bootstrap'

export default class LandingShow extends React.Component {

      render() {

        return (
           <div className="welcome">
           <Grid>
               <Row>
                   <Col lg={12} md={12} sm={12} smHidden xs={12} xsHidden>
                    <span className="welcome-text-lg">{this.props.welcome_message}</span>
                   </Col>

                   <Col lg={12} lgHidden md={12} mdHidden sm={12} xs={12} >
                    <span className="welcome-text-sm">Welcome to Iwansell</span>
                   </Col>
               </Row>
           </Grid>
           </div>
         )
     }
}
