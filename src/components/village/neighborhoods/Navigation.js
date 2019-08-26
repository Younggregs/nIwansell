import React from 'react'
import { Row } from 'react-bootstrap'
import UpperNavigation from './blocks/Upper Navigation'
import NavigationHeader from './blocks/Navigation Header'
import SlideImage from './blocks/houses/Slide Image'
import Post from './blocks/houses/Post'

export default class Navigation extends React.Component {

  state = {
    profile_id : null,
    market: 'FUTMinna',
    campus_id: 1
  }

  async componentWillMount() {

    const auth = localStorage.getItem('auth_code')

    if(this.props.market){
      this.setState({market: this.props.market, campus_id: this.props.campus_id})
    }else{this.setState({market: localStorage.getItem('market'), campus_id: localStorage.getItem('campus_id')})}
    
      if(this.props.logged_in){
        try {
          const res = await fetch('https://www.iwansell.com/api/myaccount_id/', {

            headers : {
              'Authorization' : 'Token ' + auth,

            },

          });
          const profile_id = await res.json();
          this.setState({
            profile_id
          });
        } catch (e) {
          console.log(e);
        }

      }

    }







       render() {
         return (
           <section>

           <Row>
            <NavigationHeader market={this.state.market}/>
            <Post logged_in={this.props.logged_in} campus_id = {this.state.campus_id} account_id={this.state.profile_id}/>
            <SlideImage logged_in={this.props.logged_in} campus_id = {this.state.campus_id} account_id={this.state.profile_id}/>
            <UpperNavigation logged_in={this.props.logged_in} campus_id = {this.state.campus_id} account_id={this.state.profile_id}/>
           </Row>

           </section>
         )
       }
  }
