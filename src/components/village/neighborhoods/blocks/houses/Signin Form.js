import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Button,FormGroup, FormControl } from 'react-bootstrap';
import { login } from './auth/Auth'
import AppName from './App Name'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css'


export default class SigninForm extends React.Component {

  state= {
    auth_code: null,
    statement: [],
    username_err: false,
    password_err: false,
    isLoading: false
  }


 async submitForm(){

  this.setState({ 
    username_err: false,
    password_err: false,
    isLoading: true
  })

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    if(username){

      if(password){

        var formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)



    try {
      const res = await fetch('https://www.iwansell.com/api/signin/', {

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


    login(username, password)



      }else{
        this.setState({password_err: true})
      }

    }else{
      this.setState({username_err: true})
    }

    this.setState({ isLoading: false })

  }

render(){

  function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <div>{label}</div>
        <FormControl {...props} />
        {help && <div>{help}</div>}
      </FormGroup>
  );
}

const formInstance = (
  <section className="signin-form">

  <Row className="justify-content-center">
  <div className="login-appname">
   <Col lg={6} md={6} sm={12} xs={12}>
    <Link to="/">
      <AppName/>
    </Link>
  </Col>
  </div>
</Row><br />

  <Row className="justify-content-center">
   <Col lg={4} md={4} sm={4} xs={4}>
  <Link to="/Signin">
    <Button variant="warning">Signin</Button>
  </Link>
  </Col>

  <Col lg={4} md={4} sm={4} xs={4}>
  <Link to="/Signup">
    <Button variant="outline-info">Signup</Button>
  </Link>
  </Col>
  </Row><br />

  <form>
  <Row className="justify-content-center">
  <Col lg={6} md={6} sm={12} xs={12}>
  <FormGroup>
      <div>Phone
      {this.state.username_err ? (
      <span className="err-msg">
       * Phone required 
      </span>
    ) : (
      <div/>
    )}
      </div>
      <FormControl 
        id="username" 
        name="username"
        type="number"
        />
    </FormGroup>
   </Col>

   <Col lg={6} md={6} sm={12} xs={12}>

   <FormGroup>
      <div>Password
      {this.state.password_err ? (
      <span className="err-msg">
       * Password required 
      </span>
    ) : (
      <div/>
    )}
      </div>
      <FormControl 
        id="password" 
        name="password"
        type="password"
        />
    </FormGroup>
   </Col>
   </Row>

   <Row className="justify-content-center">
   {this.state.isLoading ? (
              
              <Row>
              <Col lg={3} lgOffset={5} md={3} mdOffset={5} sm={3} smOffset={5} xs={3} xsOffset={5}>
                  <Spinner color="#01579b" size={20}/>
                </Col>
              </Row>
          ) : (
            <div>
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
            </div>
          )}
   
   </Row>

   <Row className="justify-content-center">
  
    <Col lg={6} md={6} sm={3} xs={12} xs={12}>
    <Link to ="forgot_password">
     <p style={{ color: 'black' }}>Forgot password?</p>
    </Link>
    </Col>

    <Col lg={6} md={6} sm={12} xs={12}>
      <Button variant="success" onClick={this.submitForm.bind(this)}>Submit</Button>
    </Col>


   </Row>


  </form>
  </section>
);

    return (formInstance);
  }
}
