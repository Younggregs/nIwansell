import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl, ControlLabel, HelpBlock ,Row,Col,Label} from 'react-bootstrap';
import AppName from './App Name'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class EditEShopForm extends React.Component {

  state = {
    isLoading: false,
    message : []
  }

  async update(){


    this.setState({ isLoading: true })
    const auth = localStorage.getItem('auth_code')

    var fileField = document.querySelector("input[type='file']")



    var formData = new FormData()
    formData.append('catch_board', fileField.files[0])




    try {
      const res = await fetch('https://www.iwansell.com/api/edit_eshop/', {

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

    this.setState({ isLoading: false })

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


        {this.state.isLoading ? (
          <Spinner color="#ff0000" size={32}/>
        ) : (
          <div/>
        )}


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
       <span><Redirect to={`/eshop/${ this.state.message.code }`}/></span>
    ) : (
      <span></span>
    )}
  </Row>


  </section>
);

    return (formInstance);
  }
}
