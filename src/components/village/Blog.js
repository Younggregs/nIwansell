import React from 'react'
import {Row,Col} from 'react-bootstrap'

import loadable from '@loadable/component'

const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))
const Post = loadable(() => import('./neighborhoods/blocks/houses/Post'))
const BlogCategory = loadable(() => import('./neighborhoods/blocks/houses/Blog Category'))
const BlogList = loadable(() => import('./neighborhoods/Blog List'))
const BlogPost = loadable(() => import('./neighborhoods/blocks/Blog Post'))
const RecentStories = loadable(() => import('./neighborhoods/blocks/Recent Stories'))

export default class Blog extends React.Component {

  state={
    account_id: null,
    isLoggedIn: true,
    campus_id: 1,
    market: "Your",
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


  }

      render() {

        return (
           <div className="home">
              <NavigationHeader/>
              <Post logged_in={this.state.isLoggedIn} account_id={this.state.account_id} campus_id={this.state.campus_id}/>
             <Row>
               <Col lg={2} md={2} smHidden xsHidden>
                    <BlogCategory/>
                </Col>

                <Col lg={7} md={7} sm={12} xs={12}>
                {this.props.match.params.blog_id ? (
                    <BlogPost blog_id = {this.props.match.params.blog_id}/>
                ) : (
                    <BlogList/>
                )}
                </Col>


               <Col lg={3} md={3} sm={12} xs={12}>
                  <RecentStories/>
               </Col>
              </Row>
             <GotoTop/>
             <Footer logged_in={this.state.isLoggedIn}/>
             <Copyright/>
           </div>
         )
     }
}
