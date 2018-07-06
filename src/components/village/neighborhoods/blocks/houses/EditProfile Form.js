import React from 'react';
import { Label, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import EditPhone from './Edit Phone'
import EditPassword from './Edit Password'
import EditDP from './Edit DP'

export default class EditProfileForm extends React.Component {

render(){

    return (

       <section className="edit-profile-form">

       <EditPhone profile_id = {this.props.profile_id}/>
       <EditPassword profile_id = {this.props.profile_id}/>
       <EditDP profile_id = {this.props.profile_id}/>

       </section>
      

    )
  }
}
