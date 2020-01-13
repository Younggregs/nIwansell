import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import EShopShore2 from './blocks/EShop Store 2'

export default class EShopStore extends React.Component {

  state = {
    eshop_store: [],
    subcategory: [],
    subcategory_id: null,
    media : null
  }



  async componentWillMount() {
    try {
      const res = await fetch('https://www.iwansell.com/api/eshop_subcategory/' + this.props.eshop_id );
      const subcategory = await res.json();
      this.setState({
        subcategory
      });
    } catch (e) {
      console.log(e);
    }


  }




       render() {
         return (
           <section className="trending">

                { this.state.subcategory.map(item =>

                   <EShopShore2 name= {item.name} id={item.id} eshop_id={this.props.eshop_id}/>
                )}

           </section>
         )
       }
  }
