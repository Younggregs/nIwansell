import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

export default class About extends React.Component {
       render() {
         return (
           <section className="about" id="about">
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

            </Col>

           )}

           </section>
         )
       }
  }
