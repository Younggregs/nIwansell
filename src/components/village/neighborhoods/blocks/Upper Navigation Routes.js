import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image} from 'react-bootstrap'

export default class UpperNavigationRoutes extends React.Component {

       render() {
         return (
            <Col lg={8} md={8} smHidden xsHidden>
               <section className="upper-routes" id="upper-routes">
              <Row>
                  <Col lg={2} md={2}>
                        <Link to="/eshop_list">e-SHOPS
                        </Link>
                    </Col>

                {this.props.logged_in ? (

                  <section>
                  <Col lg={2} md={2}>
                    {true ? (
                        <Link to = "/new_eshop">
                            RENT AN e-SHOP
                        </Link>
                    ) : (
                        <span></span>
                    )}
                    </Col>

                  <Col lg={2} md={2}>
                        <Link to = "/product_valuation">
                            BUSINESS MODE
                        </Link>
                    </Col>
                    </section>

                ) : (
                <section>
                 <Col lg={1} md={1}>
                        <Link to = "/signin">
                            SIGNIN
                        </Link>
                    </Col>

                  <Col lg={1} md={1}>
                    <Link to = "/signup">
                        SINGUP
                    </Link>
                    </Col>

             </section>

           )}

           <Col lg={2} md={2}>
                <Link to="/blog">BLOG
                </Link>

            </Col>


            <Col lg={1} md={1}>
                <Link to="/about_us">ABOUT
                </Link>
            </Col>

             <Col lg={2} md={2}>
                    <Link to="/contact_us">CONTACT US
                    </Link>
                </Col>

               </Row>

                </section>
              </Col>
         )
       }
  }
