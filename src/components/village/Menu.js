import React from 'react'
import Navigation from './neighborhoods/Navigation'
import MenuList from './neighborhoods/blocks/houses/Menu List'


export default class Menu extends React.Component {


  state = {
    account_id: null
  }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')

    try {
        const res = await fetch('http://199.192.21.172:8000/get_account/',{

         credentials: 'same-origin',
         mode: 'cors',
         headers : {
           'Authorization' : 'Token ' + auth
         },

        });
        const account_id = await res.json();
        this.setState({
          account_id
        });
      } catch (e) {
        console.log(e);
      }



  }


      render() {
        return (
           <div className="profile">
             <Navigation logged_in = {true} account_id={this.state.account_id}/>
             <MenuList logged_in = {this.state.loggedin}/>
           </div>
         )
     }
}
