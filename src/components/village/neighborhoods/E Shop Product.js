import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'
import EShopStore from './EShop Store'
import Copyright from './blocks/houses/Copyright'

export default class EShopProduct extends React.Component {
      title = "Products & services"
       render() {
         return (
             <Container>
               <Row className="justify-content-center">
                <Heading title={this.title}/>
               </Row>
               <Row className="justify-content-center">
                 <EShopStore eshop_id = {this.props.eshop_id}/>
              </Row>
              <Row className="justify-content-center">
                <Copyright/>
              </Row>
             </Container>
         )
       }
  }
