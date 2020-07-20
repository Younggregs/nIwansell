import React from 'react'

import loadable from '@loadable/component'

const Navigation = loadable(() => import('./neighborhoods/Navigation'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))
const CategorySlide = loadable(() => import('./neighborhoods/Category Slide'))
const CategoryMain = loadable(() => import('./neighborhoods/Category Main'))

export default class Home extends React.Component {

  state={
    account_id: null,
    campus_id: 1,
    isLoggedIn: true,
    market: "Your"
  }

  async componentWillMount() {
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

          } else {
            this.setState({ isLoggedIn: false})
          }
        })
      } catch (e) {
        console.log(e);
      }



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


    try {
      const res = await fetch('https://www.iwansell.com/api/get_campus/',{

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


    try {
      const res = await fetch('https://www.iwansell.com/api/campus_code/' + this.state.campus_id + '/');
      const market = await res.json();
      this.setState({
        market
      });
    } catch (e) {
      console.log(e);
    }



  }

      render() {

        return (
          <div className="landing-page">
             <Navigation logged_in={this.state.isLoggedIn} account_id={this.state.account_id} campus_id={this.state.campus_id} market={this.state.market}/>
             <CategoryMain campus_id={this.state.campus_id} category_id= {this.props.match.params.category_id}/>
             <CategorySlide/>
             <GotoTop/>
             <Footer logged_in={this.state.isLoggedIn}/>
             <Copyright/>
           </div>
         )
     }
}
