import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Navigation from './neighborhoods/Navigation'
import Sponsored from './neighborhoods/Sponsored'
import Trending from './neighborhoods/Trending'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'
import EShopAds from './neighborhoods/blocks/EShop Ads'
import CategorySlide from './neighborhoods/Category Slide'
import {setMarket, setCampusId, setAccountId} from './neighborhoods/blocks/houses/auth/Auth'
import MobileApp from './neighborhoods/blocks/houses/Mobile App'


export default class Home extends React.Component {

  state={
    account_id: null,
    campus_id: 1,
    market: "FUTminna"
  }

  async componentDidMount() {
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
      setAccountId(account_id)
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
      setCampusId(campus_id)
      
    } catch (e) {
      console.log(e);
    }
    setCampusId(this.state.campus_id)
 


      try {
        const res = await fetch('https://www.iwansell.com/api/campus_code/' + this.state.campus_id + '/');
        const market = await res.json();
        this.setState({
          market
        });
        setMarket(market)
        
      } catch (e) {
        console.log(e);
      }
      setMarket(this.state.market)
     





  }


      render() {

        return (
           <div className="landing-page">
             <Navigation logged_in={true} account_id={this.state.account_id} campus_id={this.state.campus_id}/>
             <Grid>
             <Row>
               <Col lg={12} md={12}>
               <MobileApp/>
                 <Row>
                    <Sponsored title="Sponsored" campus_id={this.state.campus_id}/>
                 </Row>

                 <Row>
                    <Trending campus_id={this.state.campus_id}/>
                 </Row>
                </Col>

               <Col lgHidden mdHidden smHidden xsHidden>
                  <EShopAds/>
               </Col>
              </Row>
              </Grid>
             <CategorySlide/>
             <MobileApp/>
             <GotoTop/>
             <Footer logged_in={true}/>
             <Copyright/>
           </div>
         )
     }
}
