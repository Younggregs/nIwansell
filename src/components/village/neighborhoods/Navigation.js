import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AppName from './blocks/houses/App Name'
import NavigationIcons from './blocks/houses/Navigation Icons'
import SigninSignup from './blocks/houses/Signin Signup'
import SearchField from './blocks/houses/Search Field'

export default class Navigation extends React.Component {

  state = {
    profile_id : null
  }

  async componentWillMount() {

    const auth = localStorage.getItem('auth_code')


      try {
        const res = await fetch('http://199.192.21.172:8000/myaccount_id/', {
    
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







       render() {
         return (
           <section>
            
             <Row>
               <Col lg={12} md={12} smHidden xsHidden>
               <section className="navigation" id="navigation">
              {this.props.logged_in ? (
                 <AppName logged_in={this.props.logged_in}/>
              ) :
              (
                <AppName/>
              )}
              
              <SearchField campus_id = {this.props.campus_id}/>
  
             
              {this.props.logged_in ? (
                 <NavigationIcons account_id = {this.state.profile_id}/>
              ) :
              (
                <SigninSignup/>
              )}
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
              <SearchField campus_id = {this.props.campus_id}/>
               </Row>
               </section>
              </Col>

            </Row>
          
           </section>
         )
       }
  }
