import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Image } from 'react-bootstrap'


export default class UpperNavigationRoutes extends React.Component {

       render() {
         return (
            <Container>
            
              <Row className="justify-content-md-center">

                    <Col lg={3} md={3} sm={6} xs={6} className="post-object" id="post-object">
                        <Link to={`/channel/${ this.props.campus_id }/`}>
                           <p>TV</p> 
                           <p><Image width="50px" height="50px" src={ require ('./houses/images/tv.svg') } alt="iwansell" responsive/></p>
                           <p className="school-2">...latest news, gist</p>
                        </Link>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={6} className="post-object2" id="post-object2">
                      <Link to={`/listings/${ this.props.campus_id }/`}>
                          <p>Listing</p> 
                          <p><Image width="50px" height="50px" src={ require ('./houses/images/list.svg') } alt="iwansell" responsive/></p>
                          <p className="school">...check what users need</p>
                      </Link>

                    </Col>

                  <Col lg={3} md={3} sm={6} xs={6} className="post-object" id="post-object">
                        <Link to={`/eshop_list/${ this.props.campus_id }/`}>
                           <p>eShops</p> 
                           <p><Image width="50px" height="50px" src={ require ('./houses/images/shop.svg') } alt="iwansell" responsive/></p>
                           <p className="school-2">...online stores</p>
                        </Link>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={6} className="post-object2" id="post-object2">
                      <Link to="/blog">
                          <p>Blog</p> 
                          <p><Image width="50px" height="50px" src={ require ('./houses/images/blogging.svg') } alt="iwansell" responsive/></p>
                          <p className="school">...latest features, updates</p>
                      </Link>
                    </Col>

              </Row>
              
              <Row className="justify-content-md-center">


              {this.props.logged_in ? (
                  <Col lg={3} md={3} sm={6} xs={6} className="post-object2" id="post-object2">
                    {true ? (
                        <Link to = "/profile">
                           <p>Profile</p> 
                           <p><Image width="50px" height="50px" src={ require ('./houses/images/signup.svg') } alt="iwansell" responsive/></p>
                           <p className="school">...to your profile</p>
                        </Link>
                    ) : (
                        <span></span>
                    )}
                  </Col>

                ) : (
                 <Col lg={3} md={3} sm={6} xs={6} className="post-object2" id="post-object2">
                        <Link to = "/about_us">
                           <p>About Us</p> 
                           <p><Image width="50px" height="50px" src={ require ('./houses/images/about.svg') } alt="iwansell" responsive/></p>
                           <p className="school">...get to know us</p>
                        </Link>
                    </Col>

                )}



                {this.props.logged_in ? (
                  <Col lg={3} md={3} sm={6} xs={6} className="post-object" id="post-object">
                    {true ? (
                        <Link to = "/new_eshop">
                           <p>Rent an eShop</p> 
                           <p><Image width="50px" height="50px" src={ require ('./houses/images/shop.svg') } alt="iwansell" responsive/></p>
                           <p className="school-2">...get an online store now!</p>
                        </Link>
                    ) : (
                        <span></span>
                    )}
                  </Col>

                ) : (
                 <Col lg={3} md={3} sm={6} xs={6} className="post-object" id="post-object">
                        <Link to = "/signin">
                           <p>Log In</p> 
                           <p><Image width="50px" height="50px" src={ require ('./houses/images/login.svg') } alt="iwansell" responsive/></p>
                           <p className="school-2">...login to your account</p>
                        </Link>
                    </Col>

                )}




                {this.props.logged_in ? (
                  <Col lg={3} md={3} sm={6} xs={6} className="post-object2" id="post-object2">
                  <Link to = "/product_valuation">
                     <p>Business Mode</p> 
                     <p><Image width="50px" height="50px" src={ require ('./houses/images/business.svg') } alt="iwansell" responsive/></p>
                     <p className="school">...make market research</p>
                  </Link>
              </Col>

                ) : (
                  <Col lg={3} md={3} sm={6} xs={6} className="post-object2" id="post-object2">
                  <Link to = "/signup">
                 
                         <p>Sign Up</p> 
                         <p><Image width="50px" height="50px" src={ require ('./houses/images/signup.svg') } alt="iwansell" responsive/></p>
                        <p className="school">...signup to enjoy more features</p>
                  </Link>
                  </Col>

                )}


                  <Col lg={3} md={3} sm={6} xs={6} className="post-object" id="post-object">
                        <Link to={`/channel/${ this.props.campus_id }/`}>
                           <p>TV</p> 
                           <p><Image width="50px" height="50px" src={ require ('./houses/images/tv.svg') } alt="iwansell" responsive/></p>
                           <p className="school">...latest news, gist</p>
                        </Link>
                    </Col>



               </Row>


              
              </Container>
         )
       }
  }
