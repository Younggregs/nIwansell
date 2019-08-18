import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Button, Glyphicon } from 'react-bootstrap'
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
          <section>
            <NavigationHeader/>
            <Post logged_in={this.state.isLoggedIn} account_id={this.state.account_id} campus_id={this.state.campus_id}/>
            <Grid>
                <Col lg={8} md={8} sm={12} xs={12}>
                    
                      {this.state.home ? (
                        <Row>
                          <Col lg={3} lgOffset={3} md={3} mdOffset={3} sm={4} smOffset={2} xs={4} xsOffset={2}>
                            <Button bsStyle="info" onClick={() => this.switchView(1)}>Home</Button>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6}>
                            <Button onClick={() => this.switchView(0)}>Trending</Button>
                          </Col>
                          </Row>
                        ) : (
                            <Row>
                              <Col lg={3} lgOffset={3} md={3} mdOffset={3} sm={4} smOffset={2} xs={4} xsOffset={2}>
                                <Button onClick={() => this.switchView(1)}>Home</Button>
                              </Col>
                              <Col lg={6} md={6} sm={6} xs={6}>
                                <Button bsStyle="info" onClick={() => this.switchView(0)}>Trending</Button>
                              </Col>
                            </Row>
                      )}
                      
                   
                    {this.state.home ? (
                      <ChannelHome/>
                        ) : (
                      <ChannelTrending/>
                    )}
                </Col>
                <Col lg={4} md={4} smHidden xsHidden>
                        <div className="thread">
                            <Image src={ require ('./neighborhoods/blocks/houses/images/n.jpg') } alt="iwansell-logo" responsive rounded/>
                            <Image src={ require ('./neighborhoods/blocks/houses/images/nn.jpg') } alt="iwansell-logo" responsive rounded/>
                            <Image src={ require ('./neighborhoods/blocks/houses/images/n.jpg') } alt="iwansell-logo" responsive rounded/>
                        </div>
                </Col>
             </Grid><br /><br />
             <Footer logged_in={this.state.isLoggedIn}/>
             <Copyright/>
          </section>
         )
     }
}
