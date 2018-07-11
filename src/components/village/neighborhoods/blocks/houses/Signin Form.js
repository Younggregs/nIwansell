import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { login } from './auth/Auth'
import AppName from './App Name'


export default class SigninForm extends React.Component {

  state= {
    auth_code: null,
    statement: []
  }


 async submitForm(){    

    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    

    var formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)


    try {
      const res = await fetch('http://199.192.21.172:8000/signin/', {
      
       body :formData,
       method: 'POST',
       credentials: 'same-origin',
       mode: 'cors',
    
      });
      const statement = await res.json();
      this.setState({
        statement
      });

    } catch (e) {
      console.log(e);
    }


    login(email, password)

    
  }

render(){

  function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
  );
}

const formInstance = (
  <section className="signin-form">

  <Row>
  <div className="login-appname">
   <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
  <Link to="/iwansell">
    <AppName/>
  </Link>
  </Col>
  </div>
</Row><br />

  <Row>
   <Col lg={4} lgOffset={2} md={4} mdOffset={2} sm={4} smOffset={2} xs={4} xsOffset={2}>
  <Link to="/Signin">
    <Button bsStyle="success">Signin</Button>
  </Link>
  </Col>

  <Col lg={4} lgOffset={2} md={4} mdOffset={2} sm={6} xs={6}>
  <Link to="/Signup">
    <Button>Signup</Button>
  </Link>
  </Col>
  </Row><br />

  <form>
  <Row>
  <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
      id="email"
      type="email"
      label="Email address"
      name="email"
      placeholder="example@gmail.com"
    />
   </Col>

   <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
     id="password" 
     label="Password" 
     type="password" 
     name="password"
     />
   </Col>
   </Row>

   <Row>
   {this.state.statement.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.statement.code ? ( 
       <span><Redirect to='/home'/></span>
    ) : (
      <span></span>
    )}
   </Row>

   <Row>
    <Col lg={2} lgOffset={4} md={2} mdOffset={4} sm={12} xs={12}>
    <Button bsStyle="success" onClick={this.submitForm.bind(this)}>Sign in</Button>
    </Col>
    <Col lg={4} md={4}  sm={12} xs={12}>
    <Link to ="forgot_password">
     <p>Forgot password?</p>
    </Link>
    </Col>

    
   </Row>

   
  </form>
  </section>
);

    return (formInstance);
  }
}
