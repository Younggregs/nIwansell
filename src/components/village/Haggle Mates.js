import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap'
import EHaggler from './EHaggler'

export default class HaggleMates extends React.Component {

  state = {
    haggle_list : [],
    show_ehaggle: false,
    switch_state: true,
    client_id: null,
    haggle_id: null,
    new_hagglers: null
  }

  async componentDidMount() {

    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    if (this.props.match.params.profile_id){

      try {
        const res = await fetch('http://199.192.21.172:8000/new_hagglers/' + this.props.match.params.profile_id, {

          headers : {
            'Authorization' : 'Token ' + auth,

          }

        });
        const new_hagglers = await res.json();
        this.setState({
          new_hagglers
        });
      } catch (e) {
        console.log(e);
      }


      this.setState({ client_id: this.props.match.params.profile_id })
      this.renderEHaggler()


    }

    try {
      const res = await fetch('http://199.192.21.172:8000/haggleclients/', {

        headers : {
          'Authorization' : 'Token ' + auth,

        },

        });
      const haggle_list = await res.json();
      this.setState({
        haggle_list
      });
    } catch (e) {
      console.log(e);
    }
  }

  renderEHaggler(){
    this.state.show_ehaggle = true
    this.setState({ show_ehaggle: true })
    this.switchState()

  }

  setParameters(haggle_id,client_id){
    this.state.haggle_id = haggle_id
    this.state.client_id = client_id
  }


  switchState(){

    if (this.state.switch_state == false){
      this.state.switch_state = true
      this.setState({ switch_state : true })
    }else{
      this.state.switch_state = false
      this.setState({ switch_state : false })
    }

  }

      render(){

        return (
              <div className="haggle-mates">

                <Col lg={12} md={12} smHidden xsHidden>
                <Grid>
                <Row>
                <Navbar fixedTop>
                <Row className="haggle-header">
                 <Col sm={2} xs={2}>
                 <span className="glyphs">
                 <Link to='/home'>
                      <Glyphicon glyph="circle-arrow-left"/>
                  </Link>
                 </span>
                 </Col>

                  <Col sm={7} smOffset={0} xs={7} xsOffset={0}>
                      <p>e-haggler</p>
                  </Col>
                </Row>
                 </Navbar>
                 </Row>

                 <br /><br /><br />
                   <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                  <Navbar>

                    <p className="haggle-list" >Haggle list</p>

                 </Navbar>
                  <div className="chat-list">
                 { this.state.haggle_list.map(item =>

                  <div className="chats">
                    <p><Button onClick={this.setParameters(item.haggle_id, item.client_id)} onClick={this.renderEHaggler.bind(this)}>{item.name}</Button></p>
                  </div>

                )}
                  </div>
                 </Col>

                 <Col lg={6} md={6} smHidden xsHidden>

                    {this.props.match.params.profile_id ? (
                        <EHaggler client_id={this.props.match.params.profile_id}/>
                      ) : (
                        <div>
                        { this.state.show_ehaggle ? (
                          <EHaggler haggle_id={this.state.haggle_id} client_id={this.state.client_id}/>

                           ):(
                              <p className="no-haggles">No haggles yet</p>

                       )}
                      </div>
                    )}

                  </Col>
                 </Row>
                 </Grid>
                 </Col>


                  <Col sm={12} xs={12} lgHidden mdHidden>
                  {this.state.switch_state ? (
                  <span>
                <Row>
                <Navbar fixedTop>
                <Row className="haggle-header">
                 <Col sm={2} xs={2}>
                 <span className="glyphs">
                 <Link to='/home'>
                      <Glyphicon glyph="circle-arrow-left"/>
                  </Link>
                 </span>
                 </Col>

                  <Col sm={7} smOffset={0} xs={7} xsOffset={0}>
                      <p>e-haggler</p>
                  </Col>
                </Row>
                 </Navbar>
                 </Row>

                 <br /><br /><br />
                   <Row>
                  <Col sm={12} xs={12} lgHidden mdHidden>
                  <Navbar>

                    <p className="haggle-list" >Haggle list</p>

                 </Navbar>
                  <div className="chat-list">
                 { this.state.haggle_list.map(item =>

                  <div className="chats">
                     <p><Button onClick={this.setParameters(item.haggle_id, item.client_id)} onClick={this.renderEHaggler.bind(this)}>{item.name}</Button></p>
                  </div>

                )}
                  </div>
                 </Col>
                 </Row>
                </span>
                 ) : (

                  <Row>
                   <Col sm={12} md={12} lgHidden mdHidden>



                    {this.props.match.params.profile_id ? (
                        <EHaggler client_id={this.props.match.params.profile_id}/>
                      ) : (
                        <div>
                        { this.state.show_ehaggle ? (
                          <EHaggler haggle_id={this.state.haggle_id} client_id={this.state.client_id}/>

                           ):(
                              <p className="no-haggles">No haggles yet</p>

                       )}
                      </div>
                    )}



                  </Col>
                 </Row>


                 )}
                 </Col>

              </div>
         )
     }
}
