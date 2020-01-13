import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl } from 'react-bootstrap';
import Heading from './Heading'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class EditEmail extends React.Component {

  state = {
    isLoading: false,
    message : [],
    email: null
  }

  async componentWillMount(){
    this.setState({ isLoading: true})
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

    this.setState({ isLoading: false})


  }



  async update(){
    this.setState({ isLoading: true})

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

    this.setState({ isLoading: false})

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
        <div>Email is needed for password recovery</div>
</FormGroup>

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
      <div className="isloading">
      <p><b><i>loading...</i></b></p>
      <p><Spinner color="#ff0000" size={32}/></p>
      </div>
    ) : (
      <div/>
    )}

    <Button onClick={this.update.bind(this)}>reset email</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
