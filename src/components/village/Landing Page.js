import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import Navigation from './neighborhoods/Navigation'
import Sponsored from './neighborhoods/Sponsored'
import Trending from './neighborhoods/Trending'
import EShopAds from './neighborhoods/blocks/EShop Ads'
import CategorySlide from './neighborhoods/Category Slide'
import AppName from './neighborhoods/blocks/houses/App Name'
import Heading from './neighborhoods/blocks/houses/Heading'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'
import SignupForm from './neighborhoods/blocks/houses/Signup Form.js';
import {setMarket, setCampusId} from './neighborhoods/blocks/houses/auth/Auth'


export default class LandingPage extends React.Component {
 state = {
   isLoading: false,
   isLoading2: false,
   type: false,
   campuslist: [],
   show_school: true,
   campus_id: 1,
 }


 async componentDidMount() {

  try{
    if (this.props.match.params.campus_id){
      this.setSchool(this.props.match.params.campus_id)
    }
  }catch (e){
    this.setState({ isLoading2: true})
    try {
    const res = await fetch('https://www.iwansell.com/api/campus/');
    const campuslist = await res.json();
    this.setState({
      campuslist
    });
  } catch (e) {
    console.log(e);
  }

  this.setState({ isLoading2: false})
  }

  

  
}



 async getCampusList() {


     this.setState({ type: true, isLoading: true})

     var key_word = document.getElementById("key_word").value
     var formData = new FormData()
     formData.append('key_word', key_word)

     try {
       const res = await fetch('https://www.iwansell.com/api/campus_search/', {

         body :formData,
         method: 'POST',
         credentials: 'same-origin',
         mode: 'cors',

       });
       const campuslist = await res.json();
       this.setState({
         campuslist
       });
     } catch (e) {
       console.log(e);
     }

     this.setState({ isLoading: false})
   }


school_set(){
    this.setState({ show_school: false})
}


setSchool(id){
    setCampusId(id)

    this.setState({ campus_id: id})
    this.getMarket(id)

    this.school_set()

    
}



async getMarket(id){
  try {
    const res = await fetch('https://www.iwansell.com/api/campus_code/' + id + '/');
    const market = await res.json();

    this.setState({
      market: market
    });
      setMarket(market)
  } catch (e) {
    console.log(e);
  }




 }



 emptyResult(){

   var empty_set = false

   if(this.state.campuslist.length <= 0 ){
     empty_set = true
   }

   return empty_set


 }



      render() {

        return (
           <div className="landing-page">

             { this.state.show_school ? (
               <div>
                 <Grid>
                 <Row>
                    <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                    <div className="login-appname">

                     <Row>
                        <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>

                    <AppName/>

                        </Col>
                    </Row>

                    </div>
                  </Col>
            </Row><br />

            <Row>
              <div className="login-appname">
                <p className="welcome-text">Welcome To Iwansell!</p>
              </div>
            </Row>

            

            <Row>
              <Col lg={4} md={4} smHidden xsHidden>
                  <br /><SignupForm/>
              </Col>
              <Col lg={7} md={7} sm={10} smOffset={1} xs={10} xsOffset={1}>
              
              <div className="welcome-message">
               <br /><p>Iwansell is a place to buy and sell on a campus.</p><br />
                <p>We have opened up Iwansell for popular consumption in these campuses:</p>
              </div>
                
                   {this.state.isLoading2 ? (
                       <div>
                       <p><b><i>Fetching Campus</i></b></p>
                       <p><Spinner color="#ff0000" size={32}/></p>
                       </div>
                    ) : (
                    
                      <div className="campus-list">
                         {this.state.campuslist.map(item => (
                         <span><Link to={`/iwansell/${ item.id } `}>{item.campus_code}</Link></span>
                        ))}
                     
                      </div>

                  )}
                  <div className="welcome-message">
                  <br /><p>You can use Iwansell to :</p>
                    <ul>
                      <li><b>Sell</b> anything you want</li>
                      <li><b>Buy</b> anything you can find</li>
                      <li>Rent online stores<b>(eShops)</b></li>
                      <li>Carry out market valuation using <b>Business Mode</b></li>
                      </ul><br />
                    </div>

              </Col>
            </Row>
            


               </Grid>
               </div>
             ) : (
              <div>
             <Navigation campus_id={this.state.campus_id} logged_in={false} market={this.state.market}/>
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
              </div>
             )}

             <GotoTop/>
             <Footer logged_in={false}/>
             <Copyright/>

           </div>
         )
     }
}
