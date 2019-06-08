import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button, Glyphicon } from 'react-bootstrap'
import Logo from './Logo'
import NavigationIcons from './Navigation Icons'


export default class Post extends React.Component {

       render() {
         return (
            <Row>
            <section className="post" id="post">
            <Col lg={4} md={4} smHidden xsHidden>
                <Logo/>
            </Col>
            <Col lg={4} lgOffset={2} md={4} mdOffset={2} smHidden xsHidden>
               
              <Row>
                {this.props.logged_in && (
                  <Col lg={4} md={4} className="post-object">
                      <NavigationIcons account_id={this.props.account_id}/>
                </Col>
                )}
              
                  <Col lg={2} md={2} className="post-object">
                        <Link to={`/eshop_list/${ this.props.campus_id }/`}>
                        <Glyphicon glyph="th-list"/>
                        <p>eShops</p>
                        </Link>
                    </Col>

                {this.props.logged_in ? (

                  <section>
                    <Col lg={2} md={2} className="post-object">
                        <Link to = "/newproduct">
                        <Glyphicon glyph="upload"/>
                            <p>Post</p>
                        </Link>
                    </Col>

                    <Col lg={2} md={2} className="post-objectb">
                        <Link to ="/newproduct">
                        <Glyphicon glyph="log-out"/>
                            <p>Buy It</p>
                        </Link>
                    </Col>

                  <Col lg={2} md={2} className="post-objectb">
                    <Link to = "/signup">
                    <Button bsStyle="primary">
                        Sell It
                    </Button>
                    </Link>
                    </Col>
                    </section>

                ) : (
                <section>
                <Col lg={2} md={2} className="post-object">
                        <Link to = "/signup">
                        <Glyphicon glyph="upload"/>
                           <p>Post</p> 
                        </Link>
                    </Col>

                 <Col lg={3} md={3} className="post-objectb">
                        <Link to ="/signin">
                        <Glyphicon glyph="user"/>
                            <p>Sign In</p>
                        </Link>
                 </Col>

                  <Col lg={2} md={2} className="post-objectb">
                    <Link to = "/signup">
                    <Button bsStyle="primary">
                        Sign Up
                    </Button>
                    </Link>
                  </Col>

             </section>

           )}

               </Row>

                
              </Col>

              <Col lgHidden mdHidden sm={2} xs={2} className="post-objectb">
                <Link to = "/menu">
                <Button bsStyle="primary">
                    <Glyphicon glyph="th-list" style={{color:'white'}}/>
                </Button>
                </Link>
              </Col>

              <Col lgHidden mdHidden sm={4} xs={4}>
                <Logo/>
              </Col>

              <Col lgHidden mdHidden sm={6} xs={6} className="post-objectb">
              {this.props.logged_in ? (
                <Col lg={4} md={4} className="post-object">
                      <NavigationIcons account_id={this.props.account_id}/>
                </Col>
                ) : (
                  <Row>
                  <Col sm={4} smOffset={2} xs={4} xsOffset={2} className="post-objectb">
                        <Link to ="/signin">
                        <Button bsStyle="danger">
                            Sign In
                        </Button>
                        </Link>
                 </Col>

                  <Col sm={4} xs={4} className="post-objectb">
                    <Link to = "/signup">
                    <Button bsStyle="primary">
                        Sign Up
                    </Button>
                    </Link>
                  </Col>
                  </Row>
                )}
                
              </Col>
              </section>
         </Row>
         )
       }
  }
