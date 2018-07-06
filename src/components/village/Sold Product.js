import React from 'react'
import { Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap'
import ProductImage from './neighborhoods/blocks/houses/Product Image'
import Description from './neighborhoods/blocks/houses/Description'
import BuzzMe from './neighborhoods/blocks/houses/Buzz Me'

export default class SoldProduct extends React.Component {
   
    state = {
        productDetail: [],
      }
     
       async componentWillMount() {
         try {
           const res = await fetch('http://127.0.0.1:8000/soldproduct/' + this.props.match.params.eshop_id);
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
             <Grid>
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
                  <span className="glyphs"><Glyphicon glyph="star-empty"/></span>
                  <BuzzMe/>
                  </Media.Body>
                  </Media>
                 
                 </Col>
                </Row>
                
                )}
             </Grid>     
           </section>
         )
       }
  }
