import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Glyphicon} from 'react-bootstrap'


export default class UpperNavigationRoutes extends React.Component {

       render() {
         return (
            <section>
            <Col lg={12} md={12} smHidden xsHidden>
                <section className="upper-routes" id="upper-routes">
              <Row>
                    <Col lg={2} md={2} className="post-object">
                        <Link to='channel'>
                        <Glyphicon glyph="facetime-video" style={{ color: 'darkblue'}}/>
                           <p>Channel</p> 
                        </Link>
                    </Col>

                  <Col lg={2} md={2} className="post-object">
                        <Link to={`/eshop_list/${ this.props.campus_id }/`}>
                        <Glyphicon glyph="th-list" style={{ color: 'darkblue'}}/>
                           <p>eShops</p> 
                        </Link>
                    </Col>

                {this.props.logged_in ? (

                  <section>
                  <Col lg={2} md={2} className="post-object">
                    {true ? (
                        <Link to = "/new_eshop">
                           <Glyphicon glyph="home" style={{ color: 'darkblue'}}/>
                           <p>Rent an eShop</p> 
                        </Link>
                    ) : (
                        <span></span>
                    )}
                    </Col>

                  <Col lg={2} md={2} className="post-object">
                        <Link to = "/product_valuation">
                        <Glyphicon glyph="usd" style={{ color: 'darkblue'}}/>
                           <p>Business Mode</p> 
                        </Link>
                    </Col>
                    </section>

                ) : (
                <section>
                 <Col lg={2} md={2} className="post-object">
                        <Link to = "/signin">
                        <Glyphicon glyph="user" style={{ color: 'darkblue'}}/>
                           <p>Sign In</p> 
                        </Link>
                    </Col>

                  <Col lg={2} md={2} className="post-object">
                    <Link to = "/signup">
                    <Glyphicon glyph="user" style={{ color: 'darkblue'}}/>
                           <p>Sign Up</p> 
                    </Link>
                    </Col>

             </section>

           )}

           <Col lg={2} md={2} className="post-object">
                <Link to="/blog">
                <Glyphicon glyph="inbox" style={{ color: 'darkblue'}}/>
                    <p>Blog</p> 
                </Link>

            </Col>


            <Col lg={2} md={2} className="post-object">
                <Link to="/about_us">
                <Glyphicon glyph="fire" style={{ color: 'darkblue'}}/>
                    <p>About</p> 
                </Link>
            </Col>

               </Row>

               </section>
              </Col>








              <Col lgHidden mdHidden sm={12} xs={12}>
              <section className="upper-routes" id="upper-routes">
               <Row>
                <Col sm={4} xs={4} className="post-object-sm">
                         <Link to='/channel'>
                         <Glyphicon glyph="facetime-video" style={{ color: 'darkblue'}}/>
                           <p>Channel</p> 
                         </Link>
                     </Col>

                   <Col sm={4} xs={4} className="post-object-sm">
                         <Link to={`/eshop_list/${ this.props.campus_id }/`}>
                         <Glyphicon glyph="th-list" style={{ color: 'darkblue'}}/>
                           <p>e-SHOPS</p> 
                         </Link>
                     </Col>
 
                 {this.props.logged_in ? (
 
                   <section>
                   <Col sm={4} xs={4} className="post-object-sm">
                     {true ? (
                         <Link to = "/new_eshop">
                            <Glyphicon glyph="home" style={{ color: 'darkblue'}}/>
                                <p>Rent an eShop</p>
                         </Link>
                     ) : (
                         <span></span>
                     )}
                     </Col>
 
                   <Col sm={4} xs={4} className="post-object-sm">
                         <Link to = "/product_valuation">
                         <Glyphicon glyph="usd" style={{ color: 'darkblue'}}/>
                             <p>Business Mode</p>
                         </Link>
                     </Col>
                     </section>
 
                 ) : (
                 <section>
                  <Col sm={4} xs={4} className="post-object-sm">
                         <Link to = "/signin">
                         <Glyphicon glyph="user" style={{ color: 'darkblue'}}/>
                           <p>Sign In</p> 
                         </Link>
                     </Col>
 
                   <Col sm={4} xs={4} className="post-object-sm">
                     <Link to = "/signup">
                     <Glyphicon glyph="user" style={{ color: 'darkblue'}}/>
                           <p>Sign Up</p> 
                     </Link>
                     </Col>
 
              </section>
 
            )}
 
            <Col sm={4} xs={4} className="post-object-sm">
                 <Link to="/blog">
                 <Glyphicon glyph="inbox" style={{ color: 'darkblue'}}/>
                    <p>Blog</p> 
                 </Link>
 
             </Col>
 
 
             <Col sm={4} xs={4} className="post-object-sm">
                 <Link to="/about_us">
                 <Glyphicon glyph="fire" style={{ color: 'darkblue'}}/>
                        <p>About</p> 
                 </Link>
             </Col>

 
            </Row>
 
                </section>
               </Col>






              </section>
         )
       }
  }
