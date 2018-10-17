import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Navigation from './neighborhoods/Navigation'
import BlogCategory from './neighborhoods/blocks/houses/Blog Category'
import BlogList from './neighborhoods/Blog List'
import BlogPost from './neighborhoods/blocks/Blog Post'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'
import RecentStories from './neighborhoods/blocks/Recent Stories'

export default class Blog extends React.Component {

  state={
    account_id: null,
    campus_id: 1
  }

  async componentWillMount() {
    const auth = localStorage.getItem('auth_code')
    console.log(auth)

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
             <Navigation logged_in={true} account_id={this.state.account_id} campus_id={this.state.campus_id}/>
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


               <Col lgHidden mdHidden sm={12} xsHidden={12}> 
                    <BlogCategory/>
                </Col>
              </Row>
             <GotoTop/>
             <Footer logged_in={true}/>
             <Copyright/>
           </div>
         )
     }
}
