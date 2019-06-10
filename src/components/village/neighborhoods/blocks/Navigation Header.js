import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavigationHeader extends React.Component {

       render() {
         return (
          <section className="navigation-header" id="navigation-header">

             <Row>
               <Col lg={3} md={3} smHidden xsHidden>
                  <p>Welcome to <b>{this.props.market} Campus Marketplace</b></p>
                </Col>

                <Col lg={4} lgOffset={1} md={4} mdOffset={1} smHidden xsHidden>
                  <p><b>#1 PLACE TO BUY AND SELL ON CAMPUS</b></p>
                </Col>

                <Col lg={3} lgOffset={1} md={3} mdOffset={1} smHidden xsHidden>
                 <p>Hotline: <b>08109599597</b></p>
                </Col>

                <Col lgHidden mdHidden sm={6} xs={6}>
                   <p><b>{this.props.market}</b> Campus Marketplace</p>
                  </Col>

                  <Col lgHidden mdHidden sm={3} xs={3}>
                  <Link to="/newproduct">
                  <Button bsStyle="primary">
                    <span> SELL IT </span>
                  </Button>
                 </Link>&nbsp;&nbsp;
                  </Col>

                  <Col lgHidden mdHidden sm={3} xs={3}>
                  <Link to="/buyer_transaction_window">
                  <Button bsStyle="danger">
                    <span> BUY IT </span>
                  </Button>
                  </Link>&nbsp;&nbsp;
                  </Col>
            </Row>

           </section>
         )
       }
  }
