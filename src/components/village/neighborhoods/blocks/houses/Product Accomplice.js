import React from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail, Col, Row, Button } from 'react-bootstrap'
import Heading from './Heading'
import ProductAccomplice2 from './Product Accomplice 2'


export default class ProductAccomplice extends React.Component {

    state = {
        productList : [],
        sold : false,
        remove : false
      }
    
    
      async componentWillMount() {
    
        const auth = localStorage.getItem('auth_code')
    
    
          try {
            const res = await fetch('https://www.iwansell.com/api/product_accomplice/' + this.props.product_id + '/' + this.props.campus_id + '/');
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
    
    
    
      setMedia(media_name){
        this.state.media = 'https://www.iwansell.com/api/media/' + media_name
      }
    
    
    
    
           render() {
             return (
               <section className="product-list">
               <Heading title="Other items customers are buying after viewing this item?"/>
    
               <Row>
                {this.emptyResult() ? (
                  <div></div>
                ) : (
    
                  <Row>
                    {this.state.productList.map(item => (
    
                      <ProductAccomplice2
    
                      product_id = {item.product_id}
                      product_name = {item.product_name}
                      product_image = {item.product_image}
                      starting_price = {item.starting_price}
    
    
                      />
    
                    ))}
                  </Row>
    
                )}
                </Row>
    
    
    
               </section>
             )
           }
      }
    