import React from 'react';
import { Label, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import EditEmail from './Edit Email'
import EditCampus from './Edit Campus'
import EditPassword from './Edit Password'
import EditDP from './Edit DP'
import AlternatePhone from './Alternate Phone'

export default class EditProfileForm extends React.Component {

render(){

    return (

       <section className="edit-profile-form">

       <EditDP profile_id = {this.props.profile_id}/>
       <AlternatePhone profile_id = {this.props.profile_id}/>
       <EditEmail profile_id = {this.props.profile_id}/>
       
       <EditPassword profile_id = {this.props.profile_id}/>


       </section>


    )
  }
}
