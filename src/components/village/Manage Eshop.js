import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';

import loadable from '@loadable/component'

const ManageProduct = loadable(() => import('./neighborhoods/Manage Product'))
const EditEShopForm = loadable(() => import('./neighborhoods/blocks/houses/Edit EShop Form'))

export default class ManageEshop extends React.Component {

    
      render() {
       
        return (
           <div className="manage-eshop">
           <Container>
           <Row>

                    <EditEShopForm/>

            </Row>

            <Row>

                    <ManageProduct/>

            </Row>
            </Container>
           </div>
         )
     }
}
