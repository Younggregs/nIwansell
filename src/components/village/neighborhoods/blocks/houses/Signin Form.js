import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
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
  <Link to="/">
    <AppName/>
  </Link>
  </Col>
  </div>
</Row><br />

  <Row>
   <Col lg={4} lgOffset={2} md={4} mdOffset={2} sm={4} smOffset={2} xs={4} xsOffset={2}>
  <Link to="/Signin">
    <Button bsStyle="primary">Signin</Button>
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
  <FormGroup>
      <ControlLabel>Phone
      {this.state.username_err ? (
      <span className="err-msg">
       * Phone required 
      </span>
    ) : (
      <div/>
    )}
      </ControlLabel>
      <FormControl 
        placeholder="08103800938" 
        id="username" 
        name="username"
        type="number"
        />
    </FormGroup>
   </Col>

   <Col lg={6} md={6} sm={12} xs={12}>

   <FormGroup>
      <ControlLabel>Password
      {this.state.password_err ? (
      <span className="err-msg">
       * Password required 
      </span>
    ) : (
      <div/>
    )}
      </ControlLabel>
      <FormControl 
        placeholder="*******" 
        id="password" 
        name="password"
        type="password"
        />
    </FormGroup>
   </Col>
   </Row>

   <Row>
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

   <Row>
    <Col lg={2} lgOffset={4} md={2} mdOffset={4} sm={3} smOffset={3} xs={3} xsOffset={3}>
    <Button bsStyle="primary" onClick={this.submitForm.bind(this)}>Submit</Button>
    </Col>
    <Col lg={4} md={4} sm={3} smOffset={1} xs={3} xs={1}>
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
