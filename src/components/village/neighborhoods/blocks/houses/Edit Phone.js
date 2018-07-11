import React from 'react';
import { Redirect } from 'react-router-dom' 
import { Button,FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import Heading from './Heading'


export default class EditPhone extends React.Component {

  state = {
    message : []
  }

  async update(){

    const auth = localStorage.getItem('auth_code')

    var phone = document.getElementById("phone").value

    var formData = new FormData()
    formData.append('phone', phone)
  
    try {
      const res = await fetch('http://199.192.21.172:8000/reset_phone/', {
      
       
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
  <Heading title="Set/reset phone number"/>


  <form>
  <FormGroup>
        <FormControl
            id="phone"
            type="text"
            label="Phone"
            name="phone"
            placeholder="Your phone number"
        
        />
        <HelpBlock>Phone number is needed for customers to reach you on phone</HelpBlock>
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

    <Button onClick={this.update.bind(this)}>reset phone</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
