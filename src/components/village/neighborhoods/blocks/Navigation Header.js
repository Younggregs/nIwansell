import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavigationHeader extends React.Component {

       render() {
         return (
          <section className="navigation-header" id="navigation-header">
             <Row>
               <Col lg={6} md={6}>
                  <div className="intro-header-2" id="intro-header-2">
                    <Link to='/'>
                      <p>Iwansell</p>
                    </Link>
                     <p><Image width="40px" height="40px" src={ require ('./houses/images/nicon-white.png') } alt="iwansell" responsive/></p>
                     <p className="school">#1 place to buy and sell on campus.</p>
                    </div>
                    
                </Col>

                <Col lg={4} md={4} >
                  <p className="school"> <Button variant="outline-warning">This is {this.props.market} Marketplace</Button> </p>
                </Col>

                <Col lg={2} md={2} >
                  <Button variant="warning">Sell Now!</Button>
                </Col>

                

                { 
                /*  <Col sm={6} xs={6}>
                   <p><b>{this.props.market}</b> Campus Marketplace</p>
                  </Col>

                  <Col lgHidden mdHidden sm={3} xs={3}>
                  <Link to="/newproduct">
                  <Button bsStyle="primary">
                    <span> SELL </span>
                  </Button>
                 </Link>&nbsp;&nbsp;
                  </Col>

                  <Col lgHidden mdHidden sm={3} xs={3}>
                  <Link to="/buyer_transaction_window">
                  <Button bsStyle="info">
                    <span> BUY </span>
                  </Button>
                  </Link>&nbsp;&nbsp;
                  </Col>
                */
              }
            </Row>

           </section>
         )
       }
  }
