import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AppName from './blocks/houses/App Name'
import NavigationIcons from './blocks/houses/Navigation Icons'
import SigninSignup from './blocks/houses/Signin Signup'
import SearchField from './blocks/houses/Search Field'
import UpperNavigation from './blocks/Upper Navigation'
import NavigationHeader from './blocks/Navigation Header'

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
            <NavigationHeader market={this.state.market} logged_in={this.props.logged_in}/>
            <UpperNavigation logged_in={this.props.logged_in} campus_id = {this.state.campus_id}/>
              <Col lg={12} md={12} smHidden xsHidden>
              <section className="navigation" id="navigation">
              <Row>
               <Col lg={12} md={12} smHidden xsHidden>

             {this.props.logged_in ? (
                <AppName logged_in={this.props.logged_in}/>
             ) :
             (
               <AppName/>
             )}

             <SearchField campus_id = {this.state.campus_id}/>


             {this.props.logged_in ? (
                <NavigationIcons account_id = {this.state.profile_id}/>
             ) :
             (
               <SigninSignup/>
             )}
               </Col>
              </Row>
              </section>
             </Col>



             <Col sm={12} xs={12} lgHidden mdHidden>
             <section className="sm-navigation" id="sm-navigation">
              <Row>
             {this.props.logged_in ? (
                <AppName logged_in={this.props.logged_in}/>
             ) :
             (
               <AppName/>
             )}

             {this.props.logged_in ? (
                <NavigationIcons account_id = {this.state.profile_id}/>
             ) :
             (
               <SigninSignup/>
             )}
              </Row>
              <Row>
             <SearchField campus_id = {this.state.campus_id}/>
              </Row>
              </section>
             </Col>

           </Row>

           </section>
         )
       }
  }
