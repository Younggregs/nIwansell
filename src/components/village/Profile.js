import React from 'react';
import Navigation from './neighborhoods/Navigation.js';
import ProfileDetails from './neighborhoods/Profile Details.js';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';

export default class Profile extends React.Component {


  state = {
    is_myprofile: true,
    loggedin : true
  }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('http://127.0.0.1:8000/api/is_myprofile/' + this.props.match.params.profile_id + '/', {

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
      const res = await fetch('http://127.0.0.1:8000/api/isloggedin/', {

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
             <Navigation logged_in = {this.state.isloggedin} account_id= {this.props.match.params.profile_id}/>
             <ProfileDetails logged_in = {this.state.isloggedin} is_myprofile={this.state.is_myprofile} profile_id= {this.props.match.params.profile_id}/>
             <GotoTop/>
             <Footer logged_in = {this.state.isloggedin}/>
             <Copyright/>
           </div>
         )
     }
}
