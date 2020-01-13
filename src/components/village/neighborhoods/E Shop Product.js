import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'
import EShopStore from './EShop Store'
import Copyright from './blocks/houses/Copyright'

export default class EShopProduct extends React.Component {
      title = "Products & services"
       render() {
         return (
           <section className="sponsored">
             <Container>
               <Row>
                <Heading title={this.title}/>
               </Row>
               <Row>
                 <EShopStore eshop_id = {this.props.eshop_id}/>
              </Row>
              <Row>
                <Copyright/>
              </Row>
             </Container>
           </section>
         )
       }
  }
