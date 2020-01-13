import React from 'react'
import { Container, Row, Col, Media } from 'react-bootstrap'
import ProductImage from './neighborhoods/blocks/houses/Product Image'
import Description from './neighborhoods/blocks/houses/Description'
import BuzzMe from './neighborhoods/blocks/houses/Buzz Me'

export default class SoldProduct extends React.Component {
   
    state = {
        productDetail: [],
      }
     
       async componentWillMount() {
         try {
           const res = await fetch('https://www.iwansell.com/api/soldproduct/');
           const productDetail = await res.json();
           this.setState({
             productDetail
           });
         } catch (e) {
           console.log(e);
         }
       }

       render() {
         return (
           <section className="sold-product">
             <Container>
                 <p>control reached here</p>
                 { this.state.productDetail.map(item => 

                <Row>
                <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                 <Media>
                  <Media.Left>
                  <ProductImage/>
                  </Media.Left>
                  <Media.Body>
                  <Media.Heading>{this.state.productDetail.product_name}</Media.Heading>
                  <Description description={this.state.productDetail.description}/>
                  <span className="glyphs"><div glyph="star-empty"/></span>
                  <BuzzMe/>
                  </Media.Body>
                  </Media>
                 
                 </Col>
                </Row>
                
                )}
             </Container>     
           </section>
         )
       }
  }
