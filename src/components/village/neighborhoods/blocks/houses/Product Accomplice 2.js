import React from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail, Col, Row, Button } from 'react-bootstrap'


export default class ProductAccomplice2 extends React.Component {


  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }




       render() {
         return (
            <section>

             <Col lg={4} md={4} sm={12} xs={12}> 
              <div className="manage-product">
              <div className="product-image">
                <div class="image">
               {this.setMedia(this.props.product_image)}
               <Link to={`/product/${ this.props.product_id }` }>
                  <img  height="200" width="auto" src= { `${this.state.media}` } alt="thumbnail"/>
                </Link>
               </div>
              </div>

               <div>
               <Link to={`/product/${ this.props.product_id }`}>
                    <h4><b>Product: </b> {this.props.product_name}</h4>
                    <p><b>Price: {this.props.starting_price}</b></p>
              </Link>
                
               </div><br />
               </div>
            </Col>

            </section>
         )
       }
  }
