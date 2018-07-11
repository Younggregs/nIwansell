import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col,Button, Glyphicon } from 'react-bootstrap';

export default class EShopInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {value: 3, isfavorited: false}
  }





  async favorite(){

    const auth = localStorage.getItem('auth_code')
  
    try {
      const res = await fetch('http://199.192.21.172:8000/favorite/2/' + this.props.eshop_id + '/', {
      
       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const isfavorited = await res.json();
        this.setState({
          isfavorited
        });
    } catch (e) {
      console.log(e);
    }

  }





       render() {

        var Rating = require('react-rating');

         return (
           <section className="eshop-info">
               <Row>
                 <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                 <div className="profile-description">


                <Row>
                 <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>

                
                <p className="profile-name">Favorite eshop 
                 {this.state.isfavorited ? (
                   <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><Glyphicon glyph="star"/></span></Button>
                 ) : (
                   <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><Glyphicon glyph="star-empty"/></span></Button>
                 )}
                
                </p>
                
                <p> 
                <div>
                <Link to ={`/eshop_rr/${ this.props.eshop_id } `}>
                <p className="profile-name">Ratings-Reviews
                <span className="heart-glyphs">
               <Rating 
                emptySymbol="glyphicon glyphicon-heart-empty"
                fullSymbol="glyphicon glyphicon-heart"
                {...this.props} initialRating={this.state.value} readonly quiet/>
               </span>
               </p>
                  </Link>
                </div>
                </p>

                <p className="profile-name"> Phone: 081095995997 </p>
                <p><Button>Message Greg</Button></p>


                </Col>
                </Row>

                </div>
                </Col>
                </Row>
           </section>
         )
       }
  }
