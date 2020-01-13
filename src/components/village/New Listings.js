import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import NewListingForm from './neighborhoods/blocks/houses/New Listing Form';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';

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
