import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image} from 'react-bootstrap'

export default class MobileApp extends React.Component {
       render() {
         return (
            <Row>
                <Col lgHidden mdHidden sm={12} xs={12}>
                    <Row style={{ backgroundColor: '#01579b', margin: 20, borderRadius: 5, width: 300, padding: 10}}>
                        <p style={{ fontSize: 20, fontWeight: 'bold'}}>For a better experience download our mobile app NOW!</p>
        
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <section style={{ flex: 2, margin: 10 }}>
                            <a href="https://play.google.com/store/apps/details?id=com.merlinsbeardlab.iwansell">
                                <Image width="200px" height="150px" src={ require ('./images/android2.png') } alt="android" responsive/>
                            </a>
                            </section>
                            <section style={{ flex: 2, margin: 10}}>
                            <a href="https://apps.apple.com/vc/app/iwansell/id1478416524">
                                <Image width="200px" height="150px" src={ require ('./images/ios.png') } alt="ios" responsive/>
                            </a>
                            </section>
                        </div>
        
                    </Row>
                </Col>

                <Col lg={4} md={4} smHidden xsHidden>
                    <Row style={{ backgroundColor: '#01579b', margin: 20, borderRadius: 5, width: 300, padding: 10}}>
                        <p style={{ fontSize: 20, fontWeight: 'bold'}}>For a better experience download our mobile app NOW!</p>
        
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <section style={{ flex: 2, margin: 10 }}>
                            <a href="https://play.google.com/store/apps/details?id=com.merlinsbeardlab.iwansell">
                                <Image width="200px" height="150px" src={ require ('./images/android2.png') } alt="android" responsive/>
                            </a>
                            </section>
                            <section style={{ flex: 2, margin: 10}}>
                            <a href="https://apps.apple.com/vc/app/iwansell/id1478416524">
                                <Image width="200px" height="150px" src={ require ('./images/ios.png') } alt="ios" responsive/>
                            </a>
                            </section>
                        </div>
        
                    </Row>
                </Col>
                <Col lg={4} md={4} smHidden xsHidden>
                    <Row style={{ backgroundColor: '#01579b', margin: 20, borderRadius: 5, width: 300, padding: 10}}>
                        <p style={{ fontSize: 20, fontWeight: 'bold'}}>For a better experience download our mobile app NOW!</p>
        
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <section style={{ flex: 2, margin: 10 }}>
                            <a href="https://play.google.com/store/apps/details?id=com.merlinsbeardlab.iwansell">
                                <Image width="200px" height="150px" src={ require ('./images/android2.png') } alt="android" responsive/>
                            </a>
                            </section>
                            <section style={{ flex: 2, margin: 10}}>
                            <a href="https://apps.apple.com/vc/app/iwansell/id1478416524">
                                <Image width="200px" height="150px" src={ require ('./images/ios.png') } alt="ios" responsive/>
                            </a>
                            </section>
                        </div>
        
                    </Row>
                </Col>
                <Col lg={4} md={4} smHidden xsHidden>
                    <Row style={{ backgroundColor: '#01579b', margin: 20, borderRadius: 5, width: 300, padding: 10}}>
                        <p style={{ fontSize: 20, fontWeight: 'bold'}}>For a better experience download our mobile app NOW!</p>
        
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <section style={{ flex: 2, margin: 10 }}>
                            <a href="https://play.google.com/store/apps/details?id=com.merlinsbeardlab.iwansell">
                                <Image width="200px" height="150px" src={ require ('./images/android2.png') } alt="android" responsive/>
                            </a>
                            </section>
                            <section style={{ flex: 2, margin: 10}}>
                            <a href="https://apps.apple.com/vc/app/iwansell/id1478416524">
                                <Image width="200px" height="150px" src={ require ('./images/ios.png') } alt="ios" responsive/>
                            </a>
                            </section>
                        </div>
        
                    </Row>
                </Col>
            </Row>



            
         )
       }
  }
