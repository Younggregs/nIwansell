import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl, ControlLabel, HelpBlock ,Row,Col,Label} from 'react-bootstrap';
import AppName from './App Name'


export default class EditEShopForm extends React.Component {

  state = {
    message : []
  }

  async update(){

    const auth = localStorage.getItem('auth_code')

    var fileField = document.querySelector("input[type='file']")
    var about = document.getElementById('about').value


    var formData = new FormData()
    formData.append('catch_board', fileField.files[0])
    formData.append('about', about)



    try {
      const res = await fetch('http://199.192.21.172:8000/edit_eshop/', {

       body : formData,
       method: 'POST',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const message = await res.json();
        this.setState({
          message
        });

    } catch (e) {
      console.log(e);
    }

}




render(){


const formInstance = (
  <section className="signup-form">
  <Row>
  <div className="login-appname">
   <Col lg={6} lgOffset={5} md={6} mdOffset={5} sm={12} xs={12}>
    <AppName logged_in={true}/>
  </Col>
  </div>
</Row><br />

  <Row>
   <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>

  <form>


  <FormGroup>
    <ControlLabel>Edit Catch-board</ControlLabel>
        <FormControl
            id="catch_board"
            type="file"
            name="catch_board"
            value={null}
            {...this.state.catch_board}

        />
        <HelpBlock>This is the image that would be displayed as your eshop catch board</HelpBlock>
</FormGroup>


<ControlLabel>About eshop</ControlLabel><br />

<textarea
  name="about"
  id="about"
  placeholder="What are you selling">
</textarea><br />

    <Button bsStyle="success" onClick={this.update.bind(this)}>update e-shop</Button>
  </form>
  </Col>
  </Row>


  <Row>
  {this.state.message.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.message.code ? (
       <span className="success-msg">Catch board updated successfully</span>
    ) : (
      <span></span>
    )}
  </Row>


  </section>
);

    return (formInstance);
  }
}
