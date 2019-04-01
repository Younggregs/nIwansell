import React from 'react'
import { apiClient } from './neighborhoods/blocks/houses/auth/ApiClient'
import LandingShow from './Landing Show'
import LandingPage from './Landing Page'
import Home from './Home'


export default class Welcome extends React.Component {

    state = {
        response: false,
        show_welcome: true,
        welcome: '#1 place to buy and sell on campus'
    }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    if(auth == null || auth== ""){}
    else{

      try {
        const res = await fetch('http://www.iwansell.com/api/isloggedin/', {

        credentials: 'same-origin',
        mode: 'cors',
        headers : {
         'Authorization' : 'Token ' + auth
        }

        })
        .then(response => {
          if (response.status === 200) {
            this.setState({ response: true})
          } else {
          
          }
        })

        console.log(this.state.response)
      } catch (e) {
        console.log(e);
      }
    }

      this.setState({ show_welcome: true})
  }






  async componentWillMount(){
    setTimeout( () => {
      this.setState({show_welcome: false});
    }, 7000)
  }



  render(){
      return (
        <div>
          {this.state.show_welcome ? (
            <LandingShow welcome_message = {this.state.welcome}/>
          ) : (
            <div>
                { this.state.response ? (
            <Home/>
          ): (
            <LandingPage/>
          )}
            </div>

          )}

        </div>
      )
  }

}
