import React from 'react';
import Footer from './neighborhoods/Footer.js';
import GotoTop from './neighborhoods/blocks/houses/Goto Top.js';
import Copyright from './neighborhoods/blocks/houses/Copyright.js';
import Post from './neighborhoods/blocks/houses/Post'
import NavigationHeader from './neighborhoods/blocks/Navigation Header'
import SearchView from './neighborhoods/blocks/houses/Search View'

export default class Search extends React.Component {


  state = {
    is_myprofile: true,
    loggedin : true
  }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/is_myprofile/' + this.props.match.params.profile_id + '/', {

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
      const res = await fetch('https://www.iwansell.com/api/isloggedin/', {

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
           <section className="landing-page">
            <div className="search-page">
                <NavigationHeader/>
                <Post/>
                <SearchView campus_id={1}/> 
            </div> 
           </section>
         )
     }
}
