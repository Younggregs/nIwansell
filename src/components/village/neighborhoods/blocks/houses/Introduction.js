import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image} from 'react-bootstrap'

export default class Introduction extends React.Component {
       render() {
         return (
            <div className="side-box">
            <div className="landing-view1">
              <p style={{ fontSize: 25 }}>Welcome to Iwansell</p>
              <p>Iwansell is the #1 place to buy and sell on campus.</p>
              <br />
              <br />
              <Row>
                  <Col lg={2} md={2}>
                    <Image width="30px" height="30px" src={ require ('./images/sell1.svg') } alt="iwansell" responsive/>
                  </Col>
                  <Col lg={10} md={10}>
                    <p className="intro-text"><b>Sell.</b> Anything you want.</p>
                  </Col>
              </Row><br />
              <Row>
                  <Col lg={2} md={2}>
                    <Image width="30px" height="30px" src={ require ('./images/buy.svg') } alt="iwansell" responsive/>
                  </Col>
                  <Col lg={10} md={10}>
                    <p className="intro-text"><b>Buy.</b> Anything you can find.</p>
                  </Col>
              </Row><br />
              <Row>
                  <Col lg={2} md={2}>
                    <Image width="30px" height="30px" src={ require ('./images/shop.svg') } alt="iwansell" responsive/>
                  </Col>
                  <Col lg={10} md={10}>
                    <p className="intro-text"><b>Online Store(eShops).</b> It's better with an online store.</p>
                  </Col>
              </Row><br />
              <Row>
                  <Col lg={2} md={2}>
                    <Image width="30px" height="30px" src={ require ('./images/list.svg') } alt="iwansell" responsive/>
                  </Col>
                  <Col lg={10} md={10}>
                    <p className="intro-text"><b>Listings.</b> Can't find what you are looking for? let everyone know.</p>
                  </Col>
              </Row>

              <Row><br /><br />
                <Col lg={12} md={12}>
                    <p>Download the mobile App</p>
                </Col>
              </Row>
              <Row>
                  <Col lg={6} md={6} >
                    <p>
                    <a href="https://apps.apple.com/vc/app/iwansell/id1478416524">
                        <Image width="40px" height="40px" src={ require ('./images/ios.svg') } alt="iwansell" responsive/>
                    </a>
                    </p>
                  </Col>
                  <Col lg={6} md={6}>
                    <p>
                    <a href="https://play.google.com/store/apps/details?id=com.merlinsbeardlab.iwansell">
                        <Image width="40px" height="40px" src={ require ('./images/android.svg') } alt="iwansell" responsive/>
                    </a>
                    </p>
                  </Col>
              </Row>
                

            </div>
            </div>
         )
    }
}