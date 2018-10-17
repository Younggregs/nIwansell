import React from 'react'
import {Row, Col } from 'react-bootstrap'
import Navigation from './neighborhoods/Navigation'
import Sponsored from './neighborhoods/Sponsored'
import Trending from './neighborhoods/Trending'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'
import EShopAds from './neighborhoods/blocks/EShop Ads'
import CategorySlide from './neighborhoods/Category Slide'

export default class Home extends React.Component {

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


  media_path = '/home/greggy/triads/the_iwansell'

      render() {

        return (
           <div className="home">
             <Navigation logged_in={true} account_id={this.state.account_id} campus_id={this.state.campus_id}/>
             <Row>
               <Col lg={9} md={9}>
                 <Row>
                    <Sponsored title="Sponsored" campus_id={this.state.campus_id}/>
                 </Row>

                 <Row>
                    <Trending campus_id={this.state.campus_id}/>
                 </Row>
                </Col>

               <Col lg={3} md={3} smHidden xsHidden>
                  <EShopAds/>
               </Col>
              </Row>

             <CategorySlide/>
             <GotoTop/>
             <Footer logged_in={true}/>
             <Copyright/>
           </div>
         )
     }
}
