import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap'


export default class BoughtSoldProductList extends React.Component {

  state = {
    media: null
  }


  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }




       render() {
         return (
           <section className="product-list ">
               <Col lg={3} md={3} smHidden xsHidden>
               <div className="product-image">
                <div class="image">
               {this.setMedia(this.props.product_image)}
               <img alt="product-image" src= { `${this.state.media}` }/>
               </div></div>

               <div className="product-options">

               <h3>{this.props.product_name}</h3>


                {this.props.is_account ? (
                  <Row>
                  <Col lg={6} lgOffset={3} md={6} mdOffset={3}>
                   <Link to={`/view_receipt/${ this.props.transaction_id }`}>
                     <Button bsStyle="success">View receipt</Button>
                   </Link>
                   </Col>
                   </Row>
                ) : (
                    <div/>
                )}



               </div><br /><br />

               </Col>



            <Col sm={10} smOffset={1} xs={10} xsOffset={1} lgHidden mdHidden>
             {this.setMedia(this.props.product_image)}
             <img alt="product-image" src= { `${this.state.media}` }/>

            <div className="product-options">

                <h3>{this.props.product_name}</h3>

              <Row>
              <Col sm={6} smOffset={3} xs={6} xsOffset={3}>
                    <Link to={`/view_receipt/${ this.props.transaction_id }`}>
                      <Button bsStyle="success">View reciept</Button>
                    </Link>
                  </Col>
              </Row>
            </div>
             </Col>

           </section>
         )
       }
  }
