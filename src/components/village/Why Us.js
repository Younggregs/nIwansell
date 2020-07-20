import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import loadable from '@loadable/component'

const MenuNavigation = loadable(() => import('./neighborhoods/Menu Navigation'))

export default class WhyUS extends React.Component {


       render() {
         return (
           <section className="why-us">
            <MenuNavigation/>
            <Row className="menu">

            <Col lg={2} lgOffset={2} md={2} mdOffset={2} sm={12} xs={12}>
            <div className="menu-nav">

           <p><Link to="/why_us">Why Us
           </Link></p>

           <p><Link to="/howto">How To
           </Link></p>

           <p><Link to="/faq">FAQ
           </Link></p>

            <p><Link to="/feedback">Feedback
           </Link></p>

           <p><Link to="/about_us">About Us
           </Link></p>

            <p><Link to="/contact_us">Contact Us
           </Link></p>
            </div>
            </Col>


            <Col lg={6} md={6} sm={12} xs={12}>
             <div className="menu-text">
             <p className="menu-header">Why Us</p>

              <div className="menu-body">
            <p><b>Because we bring the marketplace closer to you,
                because we would empower you with our e-shop feature,
                because we can do it better.</b></p>




              </div>
             </div>
            </Col>
          </Row>
           </section>
         )
       }
  }
