import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import Navigation from './neighborhoods/Navigation'
import Sponsored from './neighborhoods/Sponsored'
import Trending from './neighborhoods/Trending'
import EShopAds from './neighborhoods/blocks/EShop Ads'
import CategorySlide from './neighborhoods/Category Slide'
import Logo from './neighborhoods/blocks/houses/Logo'
import Footer from './neighborhoods/Footer'
import GotoTop from './neighborhoods/blocks/houses/Goto Top'
import Copyright from './neighborhoods/blocks/houses/Copyright'
import {setMarket, setCampusId} from './neighborhoods/blocks/houses/auth/Auth'
import MobileApp from './neighborhoods/blocks/houses/Mobile App'
import Adsense from './neighborhoods/blocks/houses/Adsense'


export default class LandingPage extends React.Component {
 state = {
   isLoading: false,
   isLoading2: false,
   type: false,
   campuslist: [],
   show_school: true,
   campus_id: 1,
   market: false

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

  this.school_set()
  //window.location.reload();


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
               <div className="landing-view">
                 <Grid>
                 <Row>

                     <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                        <div className="login-appname">
                          <Logo/>
                          </div>
                        </Col>

                        <Col lg={3} lgOffset={3}  md={3} mdOffset={3} sm={6} xs={6}>
                        <Link to = "/signin" style={{ padding: 10 }}>
                              <span style={{ color: 'white'}}>Sign In</span>     
                        </Link>

                        <Link to = "/signup" style={{ padding: 10 }}>
                        <Button bsStyle="primary">
                            Sign Up
                        </Button>
                        </Link>


                        </Col>
                    </Row>
                </Row>

            

            <Row>
              <Col lg={8} lgOffset={2} md={8} mdOffset={2} sm={10} smOffset={1} xs={10} xsOffset={1}>
              <div className="welcome-message">
               <br /><p>Welcome to Iwansell!</p><br />
               <p>Iwansell is a place to buy and sell on a campus.</p>
                <p>We have opened up Iwansell for popular consumption in these campuses:</p>
              </div>

              <div className="new-campus-list">
                
                   {this.state.isLoading2 ? (
                       <div>
                       <p style={{ color: 'black'}}><b><i>Fetching Campus</i></b></p>
                       <p><Spinner color="#ff0000" size={32}/></p>
                       </div>
                    ) : (
                    
                      <div className="campus-list">
                        <p style={{ color: 'black', wordWrap: 'normal', wordSpacing: 1}}>Click on campus to continue</p>
                         {this.state.campuslist.map(item => (
                         <span><a href={`/iwansell/${ item.id } `}>{item.campus_code}</a></span>
                        ))}
                     
                      </div>

                  )}
              </div>


                  <div className="welcome-messageb">
                  <br /><p>You can use Iwansell to :</p>
                  <Row>
                    <Col lg={3} md={3} sm={6} xs={6}>
                      <Glyphicon glyph="log-out"/>
                      <p><b>Sell</b> anything you want</p>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={6}>
                    <Glyphicon glyph="log-in"/>
                      <p><b>Buy</b> anything you can find</p>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={6}>
                    <Glyphicon glyph="tasks"/>
                      <p>Upload what you need<b>(Listings)</b></p>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={6}>
                    <Glyphicon glyph="home"/>
                      <p>Rent online stores<b>(eShops)</b></p>
                    </Col>

                  </Row>             
                  </div>

              </Col>
            </Row>
            


               </Grid>
               </div>
             ) : (
              <div>
             <Navigation campus_id={this.state.campus_id} logged_in={false} market={this.state.market}/>
             <Grid>
             <Row>
                <Col lg={12} md={12}>
                <MobileApp/>
                  <Row>
                     <Sponsored title="Sponsored" campus_id={this.state.campus_id}/>
                  </Row>

                  <Row>
                    <Adsense/>
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
             <Adsense/>
             <CategorySlide/>
             <MobileApp/>
             <GotoTop/>
             <Footer logged_in={false}/>
             <Copyright/>
              </div>
             )}

             
             

           </div>
         )
     }
}
