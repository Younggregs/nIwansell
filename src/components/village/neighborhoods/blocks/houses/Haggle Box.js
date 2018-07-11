import React from 'react'
import { Row, Col,Navbar, FormGroup, FormControl, Button, Glyphicon, InputGroup } from 'react-bootstrap'

export default class HaggleBox extends React.Component {

  state = {
    message : null,
    status : null
  }

 async sendMessage(){
    var msg = document.getElementById("message").value
    document.getElementById("message").value = ''
    this.state.message = msg
    this.setState({ message : msg })


    var formData = new FormData();
    formData.append('message', this.state.message);

    const auth = localStorage.getItem('auth_code')


    try {
      fetch('http://199.192.21.172:8000/send_message/' + this.props.client_id + '/',{
         
         body: formData ,
         
         method : 'POST',
         mode: 'cors',
         headers : {
          'Authorization' : 'Token ' + auth,
          
        },
      })
    } catch (e) {
      console.log(e);
    }

  }

    
      render() {
        return (
           <div className="haggle-box">
                  <br /><br />
                  <Row>
                    <Col smHidden xsHidden>   
                  <Navbar>
                   <form inline className="navbar-form" onSubmit = { this.sendMessage.bind(this) }>
                          
                     
                          <FormGroup>
                            <FormControl type="text" placeholder="make we yan" name="message" id="message" />
                          </FormGroup>{' '}
                          <Button onClick = { this.sendMessage.bind(this) }>send</Button>
                      
                   </form>
                   </Navbar>
                   
                   </Col>


                    
                    <Col lgHidden mdHidden>
                        <Navbar fixedBottom>
                        <form inline className="navbar-form" onSubmit = { this.sendMessage.bind(this)}>
                        <FormGroup>
                        <InputGroup>
                          <FormControl 
                            type="text" 
                            name="message"
                            id="message"
                            placeholder="make we yan"
                        />

                    <InputGroup.Button>
                      <Button onClick = { this.sendMessage.bind(this) }><Glyphicon glyph="send"/></Button>
                  </InputGroup.Button>
                </InputGroup>
                </FormGroup>
                </form>
                   </Navbar>

                    </Col>
                   </Row>
                 
           </div>
         )
     }
}