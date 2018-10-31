import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import Heading from './Heading'


export default class EditPhone extends React.Component {

  state = {
    message : [],
    email: null
  }

  async componentWillMount(){

    const auth = localStorage.getItem('auth_code')


    try {
      const res = await fetch('https://www.iwansell.com/api/get_email/', {
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const email = await res.json();
        this.setState({
          email
        });

    } catch (e) {
      console.log(e);
    }


  }



  async update(){

    const auth = localStorage.getItem('auth_code')

    var email = document.getElementById("email").value

    var formData = new FormData()
    formData.append('email', email)

    try {
      const res = await fetch('https://www.iwansell.com/api/reset_email/', {


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
  <section className="edit-profile-form">
  <Heading title="Set/reset email"/>


  <form>
  <FormGroup>
        <FormControl
            id="email"
            type="text"
            label="eg example@gmail.com"
            name="email"
            placeholder={this.state.email}

        />
        <HelpBlock>Email is needed for password recovery</HelpBlock>
</FormGroup>

    {this.state.message.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.message.code ? (
       <span><Redirect to={`/profile/${ this.props.profile_id } `}/></span>
    ) : (
      <span></span>
    )}

    <Button onClick={this.update.bind(this)}>reset email</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
