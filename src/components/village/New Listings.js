import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';

import loadable from '@loadable/component'

const NewListingForm = loadable(() => import('./neighborhoods/blocks/houses/New Listing Form'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))

export default class NewListings extends React.Component {

  state = {
    eshop_exist: true,
    isLoading: false
  }


      render() {
        return (
           <div className="product-manager">
             
             <Container>
              <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <div>
              
                  <NewListingForm/>
               
              </div>
              </Col>
              </Row><br /><br />
             </Container>
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </div>
         )
     }
}
