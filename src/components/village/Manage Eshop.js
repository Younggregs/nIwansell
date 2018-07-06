import React from 'react'
import { Grid,Row, Col } from 'react-bootstrap'
import ManageProduct from './neighborhoods/Manage Product'
import EditEShopForm from './neighborhoods/blocks/houses/Edit EShop Form'

export default class ManageEshop extends React.Component {

    
      render() {
       
        return (
           <div className="manage-eshop">
           <Grid>
           <Row>

                    <EditEShopForm/>

            </Row>

            <Row>

                    <ManageProduct/>

            </Row>
            </Grid>
           </div>
         )
     }
}
