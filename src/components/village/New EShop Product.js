import React from 'react'
import NewEShopProductForm from './neighborhoods/blocks/houses/New EShop Product Form'
import { Container, Row, Col } from 'react-bootstrap'

export default class NewEShopProduct extends React.Component {
    logged_in = true
       render() {
         return (
           <section className="new-eshop-product">

            <Container>
             <Row>
                <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                    <NewEShopProductForm/>
                </Col>
             </Row>
            </Container>

           </section>
         )
       }
  }
