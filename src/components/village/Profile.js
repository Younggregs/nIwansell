import React from 'react';

import loadable from '@loadable/component'

const ProfileDetails = loadable(() => import('./neighborhoods/Profile Details.js'))
const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))

export default class Profile extends React.Component {


  state = {
    is_myprofile: true,
    loggedin : true
  }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/is_myprofile/' + this.props.match.params.profile_id + '/', {

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const is_myprofile = await res.json();
        this.setState({
          is_myprofile
        });

    } catch (e) {
      console.log(e);
    }



    try {
      const res = await fetch('https://www.iwansell.com/api/isloggedin/', {

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const isloggedin = await res.json();
        this.setState({
          isloggedin
        });
    } catch (e) {
      console.log(e);
    }

  }


  render() {
    return (
       <div className="profile">
         <NavigationHeader/>
         <ProfileDetails logged_in = {this.state.isloggedin} is_myprofile={this.state.is_myprofile} profile_id= {this.props.match.params.profile_id}/>
          <br /><br />
         <GotoTop/>
         <Footer logged_in = {this.state.isloggedin}/>
         <Copyright/>
       </div>
     )
 }
}
