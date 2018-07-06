import React from 'react'
import NewEShopProductForm from './neighborhoods/blocks/houses/New EShop Product Form'
import { Grid, Row, Col } from 'react-bootstrap'

export default class NewEShopProduct extends React.Component {
    logged_in = true
       render() {
         return (
           <section className="new-eshop-product">

            <Grid>
             <Row>
                <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={6} xs={6}>
                    <NewEShopProductForm/>
                </Col>
             </Row>
            </Grid>

           </section>
         )
       }
  }
