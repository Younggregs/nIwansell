import React from 'react'
import { Container, Row } from 'react-bootstrap'

import loadable from '@loadable/component'

const MoreMedia = loadable(() => import('./blocks/More Media'))
const TheProduct = loadable(() => import('./blocks/The Product'))

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
