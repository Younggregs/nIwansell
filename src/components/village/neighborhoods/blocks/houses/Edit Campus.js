import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import Heading from './Heading'


export default class EditCampus extends React.Component {

  state = {
    message : [],
    campuslist: [],
    campus_code: null
  }

  async componentWillMount(){

    const auth = localStorage.getItem('auth_code')


    try {
      const res = await fetch('https://www.iwansell.com/api/campus/')
      const campuslist = await res.json();
        this.setState({
          campuslist
        });

    } catch (e) {
      console.log(e);
    }


    try {
        const res = await fetch('https://www.iwansell.com/api/get_campus_code/', {
         headers : {
           'Authorization' : 'Token ' + auth
         }

        })
        const campus_code = await res.json();
          this.setState({
            campus_code
          });

      } catch (e) {
        console.log(e);
      }


  }

  async update(){

    const auth = localStorage.getItem('auth_code')

    var campus = document.getElementById("campus").value

    var formData = new FormData()
    formData.append('campus', campus)

    try {
      const res = await fetch('https://www.iwansell.com/api/reset_campus/', {


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
  <Heading title="Change Campus"/>

  <p>Current campus: <b>{this.state.campus_code} campus marketplace</b></p>
  <form>
  <FormGroup>
    <ControlLabel>Select Campus</ControlLabel>
    <FormControl componentClass="select" placeholder="select" name="campus" id="campus">
                   {this.state.campuslist.map(item => (
                    <option value={item.id}>{item.campus_code}</option>
                    ))}
      </FormControl>
      <HelpBlock>NOTE: Your eShop, products would not be updated</HelpBlock>
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

    <Button bsStyle="success" onClick={this.update.bind(this)}>update campus</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
