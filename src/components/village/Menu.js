import React from 'react'

import loadable from '@loadable/component'

const Navigation = loadable(() => import('./neighborhoods/Navigation'))
const MenuList = loadable(() => import('./neighborhoods/blocks/houses/Menu List'))
const Post = loadable(() => import('./neighborhoods/blocks/houses/Post'))
const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))


export default class Menu extends React.Component {


  state = {
    islogged_in: false
  }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')
  
    try {
      const res = await fetch('https://www.iwansell.com/api/isloggedin/', {
      
       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      .then(response => {
        if (response.status === 200) {
            this.setState({ islogged_in: true })
        }
      })
  
    } catch (e) {
      console.log(e);
    }



  }


      render() {
        return (
           <div className="profile">
             <NavigationHeader market={this.state.market}/>
             <Post logged_in={this.state.islogged_in} campus_id = {this.props.match.params.campus_id}/> 
             <MenuList logged_in = {this.state.islogged_in} campus_id = {this.props.match.params.campus_id}/>
           </div>
         )
     }
}
