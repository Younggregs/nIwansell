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

                <Col lgHidden mdHidden sm={7} xs={7}>
                  <p>Welcome to <b>{this.props.market} Campus Marketplace</b></p>
                </Col>

                <Col lgHidden mdHidden sm={5} xs={5}>
                  <p>Hotline: <b>08109599597</b></p>
                </Col>
               </section>


            </Row>

           </section>
         )
       }
  }
