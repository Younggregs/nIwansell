import React from 'react';
import { Grid , Row, Col } from 'react-bootstrap';
import NewProductForm from './neighborhoods/blocks/houses/New Product Form.js';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';

export default class NewProduct extends React.Component {
      render() {
        return (
           <div className="product-manager">
             
             <Grid>
              <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <div>
               <NewProductForm/>
              </div>
              </Col>
              </Row><br /><br />
             </Grid>
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </div>
         )
     }
}
