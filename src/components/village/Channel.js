import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import NavigationHeader from './neighborhoods/blocks/Navigation Header'
import Post from './neighborhoods/blocks/houses/Post'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'
import ChannelHome from './neighborhoods/Channel Home'
import ChannelTrending from './neighborhoods/Channel Trending'


export default class Channel extends React.Component {

    state = {
      home: true
    }

    switchView(toggle){
      
      if(toggle == 1){
        this.setState({ home: true})
      }else if(toggle == 0){
        this.setState({ home: false})
      }

    }


      render() {

        return (
          <section className="channel-bg" id="channel-bg">
            <NavigationHeader/>
            <Container fluid="true">
              <Row>
                <Col lg={8} md={8} sm={12} xs={12}>
                <div className="iwansell-tv-title">
                  <p className="trending-title">Iwansell TV</p>
                  <p>... a collection of channels from the best bloggers on campus. Be entertained and enlightened, gist and discuss, enjoy!</p>
                </div>
                    
                      {this.state.home ? (
                        <Row className="channel-title-bg">
                          <Col lg={6} md={6} sm={6} xs={6}>
                            <Button variant="info" block onClick={() => this.switchView(1)}>Home</Button>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6}>
                             <Button variant="outline-warning" block onClick={() => this.switchView(0)}>Trending</Button>
                          </Col>
                          </Row>
                        ) : (
                            <Row className="channel-title-bg">
                              <Col lg={6} lgOffset={3} md={6} sm={6} xs={6}>
                                <Button variant="outline-info" block onClick={() => this.switchView(1)}>Home</Button>
                              </Col>
                              <Col lg={6} md={6} sm={6} xs={6}>
                                <Button variant="warning" block onClick={() => this.switchView(0)}>Trending</Button>
                              </Col>
                            </Row>
                      )}
                      
                   
                    {this.state.home ? (
                      <ChannelHome campus_id={this.props.match.params.campus_id}/>
                        ) : (
                      <ChannelTrending campus_id={this.props.match.params.campus_id}/>
                    )}
                </Col>
                <Col lg={4} md={4} className="d-none d-sm-block d-xs-block">
                        <div className="thread">
                            <Image src={ require ('./neighborhoods/blocks/houses/images/n.jpg') } alt="iwansell-logo" responsive rounded/>
                            <Image src={ require ('./neighborhoods/blocks/houses/images/nn.jpg') } alt="iwansell-logo" responsive rounded/>
                            <Image src={ require ('./neighborhoods/blocks/houses/images/n.jpg') } alt="iwansell-logo" responsive rounded/>
                        </div>
                </Col>
                </Row>
             </Container>

             
             <br /><br />
             <Footer logged_in={this.state.isLoggedIn}/>
             <Copyright/>
          </section>
         )
     }
}
