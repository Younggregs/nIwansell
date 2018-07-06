import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default class CatchBoard extends React.Component {
       render() {
         return (
        
          <Row>
            <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <section className="catch-board">
                <div class="catch-image">
                
               {this.props.media ? (      
                 <Image src= { `${this.props.media}` } alt="product_image" responsive/>
               ) : (
                <Image src={ require ('./images/hat.jpg') } alt="product_image"/>
               )}
              </div> 
           </section>
          </Col>
          </Row>
            
         )
       }
  }
