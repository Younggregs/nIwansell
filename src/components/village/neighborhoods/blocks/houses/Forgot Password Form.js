import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button ,Row,Col} from 'react-bootstrap';
import AppName from './App Name'

export default class ForgotPasswordForm extends React.Component {

  state={
    campuslist: [],
    statement:[]
  }

  async submitForm(){   

    var email = document.getElementById("email").value

    var formData = new FormData()
    formData.append('email', email)


    try {
      const res = await fetch('https://www.iwansell.com/api/forgot_password/', {
      
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
  <section className="signup-form">


<Row>
<div className="login-appname">
   <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
  <Link to="/iwansell">
    <AppName/>
  </Link>
  </Col>
</div>
</Row>


  <form>
  <Row>
   <Col lg={6} md={6} mdOffset={3} sm={12} xs={12}>
    <FieldGroup
      id="email"
      type="text"
      label="Your email"
      name="email"
      placeholder="e.g example@gmail.com"
    />
    </Col>
  </Row>

  <Row>
   <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
   {this.state.statement.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.statement.code ? ( 
       <span><p className="success-msg"> Awesome, your password reset details have been sent to your email account, please do not resend request</p></span>
    ) : (
      <span></span>
    )}
    </Col>
   </Row>

  
  <Row>

   <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
    <Button bsStyle="success"onClick={this.submitForm.bind(this)}>Recover password</Button>
    <HelpBlock>Just click once and wait</HelpBlock>
    </Col>

   </Row>
  </form>

  </section>
);

    return (formInstance);
  }
}
