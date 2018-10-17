import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from './houses/Logo'
import Slogan from './houses/Slogan'
import UpperNavigationRoutes from './Upper Navigation Routes'

export default class UpperNavigation extends React.Component {

       render() {
         return (
           <section>

             <Row>
               <Col lg={12} md={12} smHidden xsHidden>
               <section className="upper-navigation" id="upper-navigation">
               <Row>

              {this.props.logged_in ? (
                 <Logo logged_in={this.props.logged_in}/>
              ) :
              (
                <Logo/>
              )}

              {this.props.logged_in ? (
                 <UpperNavigationRoutes logged_in={this.props.logged_in}/>
              ) :
              (
                <UpperNavigationRoutes/>
              )}

              <Slogan/>

               </Row>
               </section>
              </Col>

              <Col lgHidden mdHidden sm={12} xs={12}>
              <Row>
                  <Col smOffset={1} sm={2}  xsOffset={1} xs={2}>
                        <Link to="/eshop_list">e-SHOPS
                        </Link>
                    </Col>

                      <Col sm={3} xs={3}>
                        <Link to = "/product_valuation">
                            BUSINESS MODE
                        </Link>
                    </Col>

                     <Col sm={2} xs={2}>
                        <Link to="/blog">BLOG
                      </Link>
                    </Col>

                    <Col sm={2} xs={2}>
                        <Link to="/contact_us">CONTACT US
                    </Link>
                </Col>

              </Row>
              </Col>
            </Row>

           </section>
         )
       }
  }
