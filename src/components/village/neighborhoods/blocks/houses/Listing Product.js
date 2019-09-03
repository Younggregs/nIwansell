import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Heading from './Heading'
import ListingProduct2 from './Listing Product 2'

export default class ProductList extends React.Component {

  state = {
    productList : [],
  }


  async componentWillMount() {

    const auth = localStorage.getItem('auth_code')
      try {
        const res = await fetch('https://www.iwansell.com/api/listing_product/', {
          headers : {
            'Authorization' : 'Token ' + auth,
          },
        });
        const productList = await res.json();
        this.setState({
          productList
        });
      } catch (e) {
        console.log(e);
      }

  }


  emptyResult(){

    var empty_set = false

    if(this.state.productList.length <= 0 ){
      empty_set = true
    }

    return empty_set


  }



       render() {
         return (
           <section className="product-list">
           <Heading title="My Listings History"/>

           <Row>
            {this.emptyResult() ? (
              <p className="err-msg">Its empty here, what you waiting for? start uploading!</p>
            ) : (
            
              <Col lg={12} md={12} xs={12} sm={12}>
                {this.state.productList.map(item => (

                  <ListingProduct2
                    product_id = {item.id}
                    product_name = {item.product_name}
                    product_description = {item.product_description}
                    budget={item.budget}
                  />

                ))}
              </Col>

            )}
            </Row>



           </section>
         )
       }
  }
