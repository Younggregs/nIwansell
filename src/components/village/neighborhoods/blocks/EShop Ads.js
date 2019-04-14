import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col,Image } from 'react-bootstrap'
import Heading from './houses/Heading'


export default class EShopAds extends React.Component {



       render() {
         return (
           <section className="eshop-ads">

              <Col lg={12} md={12} smHidden xsHidden>
              <Row>
                  <Heading title="Trending"/>
                </Row>

                <Row className="eshop-ads-items">
                    <Image width="auto" height="500px"  src={ require ('./houses/images/bg.jpg') } alt="iwansell" responsive/>
                  </Row>
                  <Row className="eshop-ads-items">
                    <Image width="auto" height="500px"  src={ require ('./houses/images/iws.jpg') } alt="iwansell" responsive/>
                  </Row>
                  <Row className="eshop-ads-items">
                    <Image width="auto" height="500px"  src={ require ('./houses/images/b2.jpg') } alt="iwansell" responsive/>
                  </Row>
                <Row className="eshop-ads-items">
                    <Image width="auto" height="500px" src={ require ('./houses/images/b1.jpg') } alt="iwansell" responsive/>
                  </Row>
                  <Row className="eshop-ads-items">
                    <Image width="auto" height="500px" src={ require ('./houses/images/slide2.png') } alt="iwansell" responsive/>
                  </Row>
                  <Row className="eshop-ads-items">
                    <Image width="auto" height="500px" src={ require ('./houses/images/slide3.png') } alt="iwansell" responsive/>
                  </Row>
                  <Row className="eshop-ads-items">
                    <Image width="auto" height="500px" src={ require ('./houses/images/slide4.png') } alt="iwansell" responsive/>
                  </Row>
                  <Row className="eshop-ads-items">
                    <Image width="auto" height="500px"  src={ require ('./houses/images/slide1.png') } alt="iwansell" responsive/>
                  </Row>
                  <Row className="eshop-ads-items">
                    <Image width="auto" height="500px"  src={ require ('./houses/images/grill1.jpg') } alt="iwansell" responsive/>
                  </Row>
                  <Row className="eshop-ads-items">
                    <Image width="auto" height="500px"  src={ require ('./houses/images/peruzzi.jpg') } alt="iwansell" responsive/>
                  </Row>
                  <Row className="eshop-ads-items">
                    <Image width="auto" height="500px"  src={ require ('./houses/images/grill.jpg') } alt="iwansell" responsive/>
                  </Row>
                  
                  
                  
              </Col>
           </section>
         )
       }
  }
