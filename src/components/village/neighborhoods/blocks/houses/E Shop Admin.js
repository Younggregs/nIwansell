import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col,Button } from 'react-bootstrap';

export default class EShopAdmin extends React.Component {

        constructor(props) {
          super(props)
          this.state = {value: 3, boss_info: []}
        }

        async componentWillMount(){
          try {
            const res = await fetch('https://www.iwansell.com/api/about_eshop/' + this.props.eshop_id + '/')
            const boss_info = await res.json();
              this.setState({
                boss_info
              });
          } catch (e) {
            console.log(e);
          }

          try {
            const res = await fetch('https://www.iwansell.com/api/rating/' + this.props.eshop_id + '/')
            const value = await res.json();
              this.setState({
                value
              });
          } catch (e) {
            console.log(e);
          }
        
        }
        
        
        
        
        
          async favorite(){
        
            const auth = localStorage.getItem('auth_code')
        
            try {
              const res = await fetch('https://www.iwansell.com/api/favorite/2/' + this.props.eshop_id + '/', {
        
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
           <section className="eshop-admin">
               <Row>
                 <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                 <div className="profile-description">

                 <Row>
                 <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                 <p className="profile-name"><i>{this.props.about}</i></p><br />

                 <p>
                <div>
                 <Link to ={`/eshop_rr/${ this.props.eshop_id }`}>
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


                <p className="boss">Boss : <Link to={`/profile/${ this.state.boss_info.id }`}>{this.state.boss_info.boss}</Link></p>
                <p className="profile-name">Mobile : {this.state.boss_info.phone}</p>


                <p>
                  <Link to ="/new_eshop_product">
                   <Button>Add new Product</Button>
                  </Link>
                </p>
                <p>
                  <Link to ={`/soldproduct/${ this.props.eshop_id }`}>
                   <Button>Sold products</Button>
                  </Link>
                </p>
                <p>
                  <Link to ="/manage_eshop">
                   <Button>Manage e-shop</Button>
                  </Link>
                </p>

                </Col>
                </Row>
                </div>


                 </Col>
                </Row>
           </section>
         )
       }
  }
