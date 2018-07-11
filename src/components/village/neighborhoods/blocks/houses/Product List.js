import React from 'react';
import { Row} from 'react-bootstrap'
import Heading from './Heading'
import ProductList2 from './Product List 2'



export default class ProductList extends React.Component {

  state = {
    productList : [],
    sold : false,
    remove : false
  }


  async componentWillMount() {

    const auth = localStorage.getItem('auth_code')


      try {
        const res = await fetch('http://199.192.21.172:8000/product_list/', {
    
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



  setMedia(media_name){
    this.state.media = 'http://199.192.21.172:8000/media/' + media_name
  }




       render() {
         return (
           <section className="product-list">
           <Heading title="My Business History"/>

           <Row>
             {this.state.productList.map(item => (

               <ProductList2 

               product_id = {item.product_id}
               product_name = {item.product_name}
               product_image = {item.product_image}
               starting_price = {item.starting_price}

               
               />
               
             ))}
           </Row>

           </section>
         )
       }
  }
