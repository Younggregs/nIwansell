import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';

import loadable from '@loadable/component'

const NewThreadForm = loadable(() => import('./neighborhoods/blocks/houses/New Thread Form.js'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))

export default class NewThread extends React.Component {

    render() {
        return (
           <div className="product-manager">
             
             <Container>
              <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                  <NewThreadForm/>
              </Col>
              </Row><br /><br />
             </Container>
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </div>
         )
     }
}
