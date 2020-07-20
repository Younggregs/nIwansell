import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col, Form, Image, FormGroup, Button } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import {setMarket, setCampusId} from './neighborhoods/blocks/houses/auth/Auth'

import loadable from '@loadable/component'

const Sponsored = loadable(() => import('./neighborhoods/Sponsored'))
const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))
const Post = loadable(() => import('./neighborhoods/blocks/houses/Post'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))
const Trending = loadable(() => import('./neighborhoods/Trending'))
const EShopAds = loadable(() => import('./neighborhoods/blocks/EShop Ads'))
const CategorySlide = loadable(() => import('./neighborhoods/Category Slide'))
const Navigation = loadable(() => import('./neighborhoods/Navigation'))
const Logo = loadable(() => import('./neighborhoods/blocks/houses/Logo'))
const MobileApp = loadable(() => import('./neighborhoods/blocks/houses/Mobile App'))
const Introduction = loadable(() => import('./neighborhoods/blocks/houses/Introduction'))


export default class LandingPage extends React.Component {
 state = {
   isLoading: false,
   isLoading2: false,
   type: false,
   campuslist: [],
   show_school: true,
   campus_id: 1,
   c_id: null,
   market: false,
   is_selected: false,
   show_button: false,
   campus_name: null
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

     var key_word = document.getElementBaaaayId("key_word").value
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


 setButton(id){
   if(this.state.is_selected){
     this.setState({ show_button: true, campus_id: id})
   }
 }


 toLanding(){
  var campus = document.getElementById("campus_id").value
  window.location.href = 'https://www.iwansell.com/iwansell/' + campus + '/'
 }



      render() {

        return (
           <div className="landing-page">

             { this.state.show_school ? (
               <div className="landing-view">

                 <Row>
                 <Col lg={12} md={12} sm={12} xs={12}>
                   <div className="intro-header">
                      <p>Iwansell</p>
                      <p><Image width="50px" height="50px" src={ require ('./neighborhoods/blocks/houses/images/nicon-white.png') } alt="iwansell" responsive/></p>
                    </div>
                  </Col>
                 </Row>

                 <Row>
                  <Col lg={7} md={7} className="d-none d-md-block">
                    <Introduction />
                  </Col>

                  <Col lg={5} md={5} sm={12} xs={12}>
                  <div className="side-box">
                  <div className="landing-view2">

                  <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <Link to='/signin'>
                        <Button variant="warning">Signin</Button>
                      </Link>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <Link to='/signin'>
                      <Button variant="info">Signup</Button>
                      </Link>
                    </Col>
                  </Row><br /><br />
                    <p>We have opened up Iwansell for popular consumption in these campuses:</p>
                   {this.state.isLoading2 ? (
                       <div>
                       <p style={{ color: 'black'}}><b><i>Fetching Campus</i></b></p>
                       <p><Spinner color="#ff0000" size={32}/></p>
                       </div>
                    ) : (
                        <FormGroup>
                          <Form.Label>Select Campus</Form.Label>
                          <Form.Control as="select" id="campus_id" name="campus_id">
                         {this.state.campuslist.map(item => (
                         <option value={item.id}>{item.campus_code}</option>
                        ))}
                      </Form.Control>
                      <br />
                      <Button variant="success" onClick={() => this.toLanding()}>
                          Continue to Market
                      </Button>{' '}
                      {this.state.show_button ? (
                        <Button variant="primary">Visit {this.state.market} Market</Button>
                      ) : (
                        <div></div>
                      )}
                      </FormGroup>
                  )}
                  <br /><br />
                  <Row>
                    <Col lg={4} md={4} sm={4} xs={4}>
                    <p>
                    <a href="https://web.facebook.com/Iwansell-group-270682653560747/?ref=br_rs">
                      <Image width="40px" height="40px" src={ require ('./neighborhoods/blocks/houses/images/facebook.svg') } alt="iwansell" responsive/>
                    </a>
                    </p>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                    <p>
                    <a href="https://twitter.com/IwansellG">
                      <Image width="40px" height="40px" src={ require ('./neighborhoods/blocks/houses/images/twitter.svg') } alt="iwansell" responsive/>
                    </a>
                    </p>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                    <p>
                    <a href="https://instagram.com/iwansellcampus">
                      <Image width="40px" height="40px" src={ require ('./neighborhoods/blocks/houses/images/instagram.svg') } alt="iwansell" responsive/>
                    </a>
                    </p>
                    </Col>
                  </Row>

                  </div>
                  </div>
                  </Col>
                </Row>

                {/* }
                <Row>
                <Col sm={12} xs={12} className="d-lg-block d-md-block">
                    <Introduction />
                  </Col>
                </Row><br /><br />
                */}

                <Row>
                 <Col lg={12} md={12} sm={12} xs={12}>
                   <div className="intro-footer">
                    <p>Brought to you by Iwansell LLC, Copyright &copy;2020</p>
                    <p>A Gregs Production</p>
                    </div>
                  </Col>
                 </Row>


               </div>
             ) : (
              <div>
             <Navigation campus_id={this.state.campus_id} logged_in={false} market={this.state.market}/>
             <Trending campus_id={this.state.campus_id}/>
             
             <CategorySlide/>
             <GotoTop/>
             <Footer logged_in={false}/>
             <Copyright/>
              </div>
             )}

             
             

           </div>
         )
     }
}
