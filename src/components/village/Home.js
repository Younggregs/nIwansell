import React from 'react'
import Navigation from './neighborhoods/Navigation'
import Sponsored from './neighborhoods/Sponsored'
import Trending from './neighborhoods/Trending'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'

export default class Home extends React.Component {

  state={
    account_id: null,
    campus_id: 1
  }

  async componentWillMount() {
    const auth = localStorage.getItem('auth_code')
    console.log(auth)
    
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


    try {
      const res = await fetch('http://199.192.21.172:8000/get_campus/',{

       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       },

      });
      const campus_id = await res.json();
      this.setState({
        campus_id
      });
    } catch (e) {
      console.log(e);
    }


  }


  media_path = '/home/greggy/triads/the_iwansell'
    
      render() {
       
        return (
           <div className="home">
             <Navigation logged_in={true} account_id={this.state.account_id} campus_id={this.state.campus_id}/>
             <Sponsored title="Sponsored" campus_id={this.state.campus_id}/>
             <Trending campus_id={this.state.campus_id}/>
             <GotoTop/>
             <Footer/>
             <Copyright/>
           </div>
         )
     }
}
