import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button ,Row,Col} from 'react-bootstrap';
import AppName from './App Name'

export default class ResetPasswordForm extends React.Component {

  state={
    campuslist: [],
    statement: [],
    error_message: null
  }

  


  evaluateForm(){

    var new_password = document.getElementById("new_password").value
    var confirm_password = document.getElementById("confirm_password").value

    if (new_password == confirm_password){
      this.submitForm(new_password)
    }else{
      var error_message = 'Passwords do not match, try again'
      this.setState({ error_message: error_message})
    }


  }


  async submitForm(new_password){    

    var formData = new FormData()
    formData.append('new_password', new_password)


    try {
      const res = await fetch('http://199.192.21.172:8000/reset_password/' + this.props.reset_code + '/', {
      
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
   <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
      id="new_password"
      type="password"
      label="New Password"
      name="new_password"
    />
    </Col>
    <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
      id="confirm_password"
      type="password"
      label="Confirm password"
      name="confirm_password"
    />
    </Col>
 </Row>

  <Row>
    <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
    <p className="err-msg">{this.state.error_message}</p>

   {this.state.statement.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.statement.code ? ( 
       <span><Redirect to='/signin'/></span>
    ) : (
      <span></span>
    )}
  
    </Col>

    <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
    <Button bsStyle="success" onClick={this.evaluateForm.bind(this)}>Create new password</Button>
    <HelpBlock>Just click once and wait</HelpBlock>
    </Col>

   </Row>
  </form>

  </section>
);

    return (formInstance);
  }
}
