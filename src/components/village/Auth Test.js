import React from 'react';
import { Link } from 'react-router-dom';
import store from './neighborhoods/blocks/houses/auth/store';
import { setToken } from './neighborhoods/blocks/houses/auth/actions'
import { Row, Col, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';


export default class AuthTest extends React.Component {
 state = {
   auth_code : null,
   eshop_name: null
 }


  async authenticate(){
    var username = document.getElementById("email").value
    var password = document.getElementById("password").value

    var formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)


    try {
      const res = await fetch('http://localhost:8000/auth', {
      
       body :formData,
       method: 'POST',
       credentials: 'same-origin',
       mode: 'cors',
    
      });
      const auth_code = await res.json();
      this.setState({
        auth_code
      });
      console.log(this.state.auth_code)
      
      console.log(localStorage.getItem('auth_code'))

    } catch (e) {
      console.log(e);
    }


}






async newEShop(){
  var eshop_name = document.getElementById("eshop_name").value
  this.setState({ eshop_name: eshop_name})
  const auth = localStorage.getItem('auth_code')

  var formData = new FormData()
  formData.append('eshop_name', eshop_name)

  try {
    const res = await fetch('http://localhost:8000/new_eshop/', {
    
    body: formData,
    method: 'POST',
    headers : {
      'Authorization' : 'Token ' + auth,
      
    },
  
    });
    const new_eshop = await res.json();
    this.setState({
      new_eshop
    });
    console.log('console log :' + this.state.new_eshop)

  } catch (e) {
    console.log(e);
  }


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
   <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
  <Link to="/">
    <p>Iwansell</p>
    
  </Link>
  </Col>
</Row>

  <Row>
   <Col lg={4} lgOffset={2} md={4} mdOffset={2} sm={6} xs={6}>
  <Link to="/Signin">
    <Button>Signin</Button>
  </Link>
  </Col>

  <Col lg={4} lgOffset={2} md={4} mdOffset={2} sm={6} xs={6}>
  <Link to="/Signup">
    <Button>Signup</Button>
  </Link>
  </Col>
  </Row>

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
    <FieldGroup id="password" label="Password" type="password" name="password"/>
   </Col>
   </Row>

   <Row>
    <Col lg={2} lgOffset={4} md={2} mdOffset={4} sm={12} xs={12}>
    <Button onClick={this.authenticate.bind(this)}>Sign in</Button>
    </Col>
    <Col lg={4} md={4}  sm={12} xs={12}>
    <Link to ="forgot_password">
     <p>Forgot password?</p>
    </Link>
    </Col>

    
   </Row>

   
  </form>







  <form>
  <Row>
  <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
      id="eshop_name"
      type="text"
      label="eshop name"
      name="eshop_name"
      placeholder="example@gmail.com"
    />
   </Col>
   </Row>
   <Row>
    <Col lg={2} lgOffset={4} md={2} mdOffset={4} sm={12} xs={12}>
    <Button onClick={this.newEShop.bind(this)}>Sign in</Button>
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
