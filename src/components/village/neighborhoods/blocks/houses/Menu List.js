import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

export default class MenuList extends React.Component {
       render() {
         return (
           <section className="menu_list">
          <Row>
             <Col lg={6} md={6} sm={6} xs={6}>
              <Row>

          <p><Link to="/eshop_list">e-shops
           </Link></p>

           <p><Link to="/why_us">Why Us
           </Link></p>

           <p><Link to="/howto">How To
           </Link></p>

           <p><Link to="/faq">FAQ
           </Link></p>

            <p><Link to="/feedback">Feedback
           </Link></p>

           <p><Link to="/about">About Us
           </Link></p>

            <p><Link to="/contact_us">Contact Us
           </Link></p>

               </Row>
              </Col>




             <Col lg={6} md={6} sm={6} xs={6}>
              <Row>
           {this.props.logged_in ? (

             <Col lg={6} md={6} sm={12} xs={12}>
             <p><Link to = "/new_eshop">
               Rent an e-shop
             </Link></p>
             <p><Link to = "/logout">
               Logout
             </Link></p>

             </Col>

           ) : (

            <Col lg={6} md={6} sm={12} xs={12}>
             <p><Link to = "/signin">
               Signin
             </Link></p>
             <p><Link to = "/signup">
               Signup
             </Link></p>

             </Col>

           )}
             </Row>
            </Col>
           </Row>


           </section>
         )
       }
  }
