import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col,Button } from 'react-bootstrap';

export default class EShopAdmin extends React.Component {

        constructor(props) {
          super(props)
          this.state = {value: 3}
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
