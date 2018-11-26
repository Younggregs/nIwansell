import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Heading from './Heading'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class EditPassword extends React.Component {

  state = {
    isLoading: false,
    message : []
  }

  async update(){

    this.setState({ isLoading: true })
    const auth = localStorage.getItem('auth_code')

    var old_password = document.getElementById("old_password").value
    var new_password = document.getElementById("new_password").value
    var confirm_password = document.getElementById("confirm_password").value

    var formData = new FormData()
    formData.append('old_password', old_password)
    formData.append('new_password', new_password)
    formData.append('confirm_password', confirm_password)

    try {
      const res = await fetch('https://www.iwansell.com/api/update_password/', {


       body : formData,
       method: 'POST',
       credentials: 'same-origin',
       mode: 'cors',
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
  <section className="edit-profile-form">
  <Heading title="Reset Password"/>

  <form>
    <FieldGroup
     id="old_password"
     name="old_password"
     label="Old Password"
     type="password" />

    <FieldGroup
     id="new_password"
     name="new_password"
     label="New Password"
     type="password" />

    <FieldGroup
    id="confirm_password"
    name="confirm_password"
    label="Confirm Password"
    type="password" />

    {this.state.message.error_message ? (
      <p className="err-msg">{this.state.message.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.message.code ? (
       <p className="success-msg">Success!</p>
    ) : (
      <span></span>
    )}

    {this.state.isLoading ? (
      <Spinner color="#ff0000" size={32}/>
    ) : (
      <div/>
    )}

    <Button onClick={this.update.bind(this)}>reset password</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
