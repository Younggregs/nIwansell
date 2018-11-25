import React from 'react'
import { Row} from 'react-bootstrap'
import Heading from './Heading'
import BoughtSoldProductList from './BS Product List'


export default class SoldProductList extends React.Component {

  state = {
    productList : [],
  }


  async componentWillMount() {

    const auth = localStorage.getItem('auth_code')


      try {
        const res = await fetch('https://www.iwansell.com/api/sold_product/' + this.props.profile_id + '/', {

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




       render() {
         return (
           <section className="product-list">
           <Heading title="Sold Product List"/>

           <Row>
             {this.state.productList.map(item => (

               <BoughtSoldProductList

               transaction_id = {item.transaction_id}
               product_name = {item.product_name}
               product_image = {item.product_image}
               is_account = {item.is_account}

               />

             ))}
           </Row>

           </section>
         )
       }
  }
