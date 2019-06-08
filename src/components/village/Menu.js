import React from 'react'
import Navigation from './neighborhoods/Navigation'
import MenuList from './neighborhoods/blocks/houses/Menu List'
import Post from './neighborhoods/blocks/houses/Post'
import NavigationHeader from './neighborhoods/blocks/Navigation Header'


export default class Menu extends React.Component {


  state = {
    account_id: null
  }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')

    try {
        const res = await fetch('https://www.iwansell.com/api/get_account/',{

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
             <NavigationHeader market={this.state.market}/>
             <Post logged_in={this.props.logged_in} campus_id = {this.state.campus_id}/> 
             <MenuList logged_in = {this.state.loggedin}/>
           </div>
         )
     }
}
