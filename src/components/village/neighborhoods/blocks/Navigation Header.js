import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavigationHeader extends React.Component {

       render() {
         return (
           <section>

             <Row>
               <section className="navigation-header" id="navigation-header">
               <Col lg={4} md={4} smHidden xsHidden>
                  <p>Welcome to <b>{this.props.market} Campus Marketplace</b></p>
                </Col>

                <Col lg={4} md={4} lgOffset={4} mdOffset={4} smHidden xsHidden>
                 <p>Hotline: <b>08109599597</b></p>
                </Col>

                <Col lgHidden mdHidden sm={6} xs={6}>
                   <p><b>{this.props.market}</b> Campus Marketplace</p>
                  </Col>

                
                  {this.props.logged_in ? (
                    <span>
                    <Col lgHidden mdHidden sm={3} xs={3}>
                  <Link to="/newproduct">
                  <Button bsStyle="success">
                    <span className="blink-me"> SELL IT </span>
                  </Button>
                 </Link>&nbsp;&nbsp;
                  </Col>

                  <Col lgHidden mdHidden sm={3} xs={3}>
                  <Link to="/buyer_transaction_window">
                  <Button bsStyle="danger">
                    <span className="blink-me"> BUY IT </span>
                  </Button>
                  </Link>&nbsp;&nbsp;
                  </Col>
                    </span>
                  ) : (
                    <span>
                    <Col lgHidden mdHidden sm={3} xs={3}>
                  <Link to="/signup">
                  <Button bsStyle="success">
                    <span className="blink-me"> SELL IT </span>
                  </Button>
                 </Link>&nbsp;&nbsp;
                  </Col>

                  <Col lgHidden mdHidden sm={3} xs={3}>
                  <Link to="/signup">
                  <Button bsStyle="danger">
                    <span className="blink-me"> BUY IT </span>
                  </Button>
                  </Link>&nbsp;&nbsp;
                  </Col>
                  </span>
                  )}
                  

               </section>


            </Row>

           </section>
         )
       }
  }
