import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl } from 'react-bootstrap';
import Heading from './Heading'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class EditDP extends React.Component {


    state = {
        isLoading: false,
        message : []
      }

      async update(){

        this.setState({ isLoading: true})
        const auth = localStorage.getItem('auth_code')

        var fileField = document.querySelector("input[type='file']");


        var formData = new FormData()
        formData.append('display_pic', fileField.files[0]);


        try {
          const res = await fetch('https://www.iwansell.com/api/reset_dp/', {

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

        this.setState({ isLoading: false})

    }



render(){


const formInstance = (
  <section className="edit-profile-form">
  <Heading title="Reset Display Picture"/>


  <form>
  <FormGroup>
        <FormControl
            id="display_pic"
            type="file"
            name="display_pic"
            value={null}

        />
        <div>An image of yourself would be great</div>
</FormGroup>

{this.state.message.error_message ? (
      <p className="err-msg">{this.state.message.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.message.code ? (
       <span><Redirect to={`/profile/${ this.props.profile_id }`}/></span>
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
    <Button onClick={this.update.bind(this)}>reset dp</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
