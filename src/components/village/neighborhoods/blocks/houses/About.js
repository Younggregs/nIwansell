import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image} from 'react-bootstrap'

export default class About extends React.Component {
       render() {
         return (
           <section className="about" id="about">
            <Row>
            <Col lg={6} lgOffset={1} md={6} mdOffset={1} sm={6} smOffset={1} xs={6} xsOffset={1}>
              <Row>
          
            <p><Link to="/channel">Channel
           </Link></p>

          <p><Link to="/eshop_list/1">e-shops
           </Link></p>

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

               </Row>
              </Col>




            <Col lg={5} md={5} sm={5} xs={5}>
              <Row>
           {this.props.logged_in ? (

             <Col lg={6} md={6} sm={12} xs={12}>
             {this.props.eshop_exist ? (
                <span/>
              ) : (
              <p><Link to = "/new_eshop">
                  Rent an e-shop
             </Link></p>
              )}
             <p><Link to = "/product_valuation">
               Business Mode
             </Link></p>
             <p><Link to = "/newproduct">
              Upload item for sell
            </Link></p>
            <p><Link to = "/productmanager">
              Sell your item
            </Link></p>
            <p><Link to = "/buyer_transaction_window">
              Buy an item
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

          <Row>
           <Col lg={8} lgOffset={3} md={8} mdOffset={3} sm={12} xs={12}>
             <Row>
              <Col lg={2} md={2} sm={3} smOffset={2} xs={3} xsOffset={2}>

                <a href="https://web.facebook.com/Iwansell-group-270682653560747/?ref=br_rs">
                  <Image width="50px" height="50px" src={ require ('./images/facebook.png') } alt="facebook" responsive/>
                </a>
              </Col>

              <Col lg={2} md={2} sm={3} xs={3}>
                <a href="https://twitter.com/IwansellG">
                  <Image width="50px" height="50px" src={ require ('./images/twitter.png') } alt="twitter" responsive/>
                </a>
              </Col>

              <Col lg={2} md={2} sm={3} xs={3}>
                <a href="https://instagram.com/iwansell_group">
                  <Image width="60px" height="60px" src={ require ('./images/instagram.png') } alt="instagram" responsive/>
                </a>
              </Col>

             </Row>
            </Col>
          </Row>


           </section>
         )
       }
  }
