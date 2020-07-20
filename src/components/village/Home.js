import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {setMarket, setCampusId, setAccountId} from './neighborhoods/blocks/houses/auth/Auth'

import loadable from '@loadable/component'

const Sponsored = loadable(() => import('./neighborhoods/Sponsored'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))
const Trending = loadable(() => import('./neighborhoods/Trending'))
const EShopAds = loadable(() => import('./neighborhoods/blocks/EShop Ads'))
const Adsense = loadable(() => import('./neighborhoods/blocks/houses/Adsense'))
const CategorySlide = loadable(() => import('./neighborhoods/Category Slide'))
const Navigation = loadable(() => import('./neighborhoods/Navigation'))
const Logo = loadable(() => import('./neighborhoods/blocks/houses/Logo'))
const MobileApp = loadable(() => import('./neighborhoods/blocks/houses/Mobile App'))


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
         <Trending campus_id={this.state.campus_id}/>
         
         <CategorySlide/>
         <GotoTop/>
         <Footer logged_in={true}/>
         <Copyright/>
       </div>
     )
 }
}
