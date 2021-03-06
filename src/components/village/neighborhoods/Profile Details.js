import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import loadable from '@loadable/component'

const ProfileImage = loadable(() => import('./blocks/houses/Profile Image.js'))
const ProfileDescription = loadable(() => import('./blocks/houses/Profile Description.js'))

export default class ProfileDetails extends React.Component {

  state = {
    profileDetail: [],
    myaccount: null,
    media : null
  }

   async componentWillMount() {
     try {
       const res = await fetch('https://www.iwansell.com/api/accounts/' + this.props.profile_id);
       const profileDetail = await res.json();
       this.setState({
         profileDetail
       });
     } catch (e) {
       console.log(e);
     }

   }

   setMedia(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }



  render() {
    return (
      <section  className="profile-details">
       <Container>
        <br /><br />
        <Row className="justify-content-md-center">
         <Col lg={8} md={8} sm={12} xs={12}>

         {this.setMedia(this.state.profileDetail.display_pic)}
         <ProfileImage media={this.state.media}/>
         </Col>
        </Row>

        <Row className="justify-content-md-center">
         <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
         <ProfileDescription
         logged_in = {this.props.logged_in}
         is_myprofile = {this.props.is_myprofile}
         firstname ={this.state.profileDetail.firstname}
         lastname = {this.state.profileDetail.lastname}
         ismyaccount = {this.state.ismyaccount}
         profile_id = {this.props.profile_id}
         />
         </Col>
       </Row><br /><br />
      </Container>
      </section>
    )
  }
}
