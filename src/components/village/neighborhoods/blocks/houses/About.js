import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image, Button, Container } from 'react-bootstrap'

export default class About extends React.Component {
       render() {
         return (
           <section className="about" id="about">
            <Container>
            <Row>

            <Col lg={3} md={3} sm={6} xs={6}>  
              <Row>
                <p>Get to know us</p>
              </Row>

              <Row>
                <p><Link to="/about_us">About Us
                </Link></p>
              </Row>

              <Row>
                <p><Link to="/why_us">Why Us
                </Link></p>
              </Row>

            </Col>


            <Col lg={3} md={3} sm={6} xs={6}>  
              <Row>
                <p>Business on our platform</p>
              </Row>

              {this.props.logged_in ? (

             <section>
               <Row>
              {this.props.eshop_exist ? (
                  <span/>
                ) : (
                  <p><Link to = "/new_eshop">
                    Rent an e-shop
                  </Link></p>
              )}
              </Row>

              <Row>
                <p><Link to = "/product_valuation">
                  Business Mode
                </Link></p>
              </Row>

              <Row>
                <p><Link to = "/newproduct">
                  Upload item for sell
                  </Link></p>
              </Row>

             
             <Row>
              <p><Link to = "/productmanager">
                Sell your item
              </Link></p>
             </Row>
            
            <Row>
              <p><Link to = "/buyer_transaction_window">
                Buy an item
              </Link></p>
            </Row>
            
            <Row>
              <p><Link to = "/logout">
                Logout
              </Link></p>
            </Row>
             

             </section>

           ) : (
            <section>
            <Row>
             <p><Link to = "/signin">
               Signin
             </Link></p>
             </Row>

             <Row>
             <p><Link to = "/signup">
               Signup
             </Link></p>
             </Row>

             </section>

           )}
          </Col>
           

  
          <Col lg={3} md={3} sm={6} xs={6}>
            <Row>
              <Button variant='outline-warning'>Download the Mobile App.</Button>
            </Row><br />

            <Row>
            <Button variant='outline-info'>
              <a href="https://apps.apple.com/vc/app/iwansell/id1478416524">
                  <Image width="50px" height="50px" src={ require ('./images/app-store.svg') } alt="iwansell" responsive/>
                </a>
              </Button>
            </Row><br />

            <Row>
            <Button variant='outline-success'>
              <a href="https://play.google.com/store/apps/details?id=com.merlinsbeardlab.iwansell">
                <Image width="50px" height="50px" src={ require ('./images/play-store.svg') } alt="iwansell" responsive/>
              </a>
            </Button>
            </Row>

          </Col>


           <Col lg={3} md={3} sm={4} xs={4}>
             <Row>
               <p>Follow us.</p>
             </Row>
             <Row>
                <a href="https://web.facebook.com/Iwansell-group-270682653560747/?ref=br_rs">
                  <Image width="50px" height="50px" src={ require ('./images/facebook.svg') } alt="facebook" responsive/>
                </a>
              </Row><br />

              <Row>
                <a href="https://twitter.com/IwansellG">
                  <Image width="50px" height="50px" src={ require ('./images/twitter.svg') } alt="twitter" responsive/>
                </a>
              </Row><br />

              <Row>
                <a href="https://instagram.com/iwansellcampus">
                  <Image width="50px" height="50px" src={ require ('./images/instagram.svg') } alt="instagram" responsive/>
                </a>
              </Row><br />

            </Col>

          </Row>



          </Container>
           </section>
         )
       }
  }
