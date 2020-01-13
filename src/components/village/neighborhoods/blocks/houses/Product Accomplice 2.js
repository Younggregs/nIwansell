import React from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail, Col, Row, Button, Image} from 'react-bootstrap'


export default class ProductAccomplice2 extends React.Component {

    state ={
        media: null
    }
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
        
           <a href={`/product/${ this.props.product_id }` }>
             <Image src= { `${this.state.media}` } alt="product image"/>
           </a>

          </div>
         </div>

          <div>
          <span><a href={`/product/${ this.props.product_id }` }>
               <Button variant='outline-warning'>{this.props.product_name}</Button><br />
               <Button variant='warning'>{this.props.starting_price}</Button>
           </a>
           </span>
           
          </div><br />
          </div>
       </Col>

       </section>
    )
  }
}
