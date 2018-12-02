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
        const res = await fetch('https://www.iwansell.com/api/product_list/', {

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



  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }




       render() {
         return (
           <section className="product-list">
           <Heading title="My Business History"/>

           <Row>
            {this.emptyResult() ? (
              <p className="err-msg">Its empty here, what you waiting for? start uploading!</p>
            ) : (

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

            )}
            </Row>



           </section>
         )
       }
  }
