import React from 'react'
import { Container, Row } from 'react-bootstrap'
import MoreMedia from './blocks/More Media'
import TheProduct from './blocks/The Product'

export default class ProductDescription extends React.Component {
       render() {
         return (
           <section className="product-description">
             <Container>
              <br /><br /><Row>
                <TheProduct product_id={this.props.product_id} logged_in = {this.props.logged_in}/>
              </Row>
             </Container>
           </section>
         )
       }
  }
