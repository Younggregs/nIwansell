import React from 'react'
import { Grid,Row,Col, Form, FormGroup,FormControl, Button } from 'react-bootstrap'
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


export default class LandingPage extends React.Component {
 state = {
   isLoading: true,
   market: "Your",
   show_school: true,
   campus_id: '1',
   school: "Futminna",
 }




school_set(){
    this.setState({ show_school: false})
}


setSchool(){
    var id = document.getElementById("campus_id").value
    this.setState({ campus_id: id})
    this.school_set()

    this.setMarket()
}

async setMarket(){
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
                 {this.state.isLoading ? (
                    <Spinner/>
                  ) : (
                  <Col lg={4} lgOffset={4} md={4} mdOffset={4} sm={10} smOffset={1} xs={10} xsOffset={1}>
                  <form>
                      <Heading title="Select Campus"/>
                    <FormGroup>
                   <FormControl componentClass="select" placeholder="select" id="campus_id">
                   {this.state.campuslist.map(item => (
                    <option value={item.id}>{item.campus_code}</option>
                    ))}
                   </FormControl>
                 </FormGroup>

                 <FormGroup>{' '}
                <Button bsStyle="success" onClick={this.setSchool.bind(this)}>continue</Button>
                  </FormGroup>{' '}
                  </form>
                  </Col>
                )}

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
             <GotoTop/>
             <Footer logged_in={false}/>
             <Copyright/>
              </div>
             )

             }

           </div>
         )
     }
}
