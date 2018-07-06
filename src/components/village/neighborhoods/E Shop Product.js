import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'
import EShopStore from './EShop Store'
import Copyright from './blocks/houses/Copyright'

export default class EShopProduct extends React.Component {
      title = "Products and services"
       render() {
         return (
           <section className="sponsored">
             <Grid>
               <Row>
                <Heading title={this.title}/>
               </Row>
               <Row>
                 <EShopStore eshop_id = {this.props.eshop_id}/>
              </Row>
              <Row>
                <Copyright/>
              </Row>
             </Grid>
           </section>
         )
       }
  }
