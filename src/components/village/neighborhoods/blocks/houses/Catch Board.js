import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default class CatchBoard extends React.Component {
       render() {
         return (

          <Row className="justify-content-md-center">
            <Col lg={6} md={6} sm={12} xs={12}>
              <section className="catch-board">
                <div class="catch-image">

               {this.props.media ? (
                 <Image src= { `${this.props.media}` } alt="product_image" responsive/>
               ) : (
                <div glyph="user"/>
               )}
              </div>
           </section>
          </Col>
          </Row>

         )
       }
  }
