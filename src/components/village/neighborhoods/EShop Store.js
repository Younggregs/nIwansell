import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
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
      const res = await fetch('http://127.0.0.1:8000/eshop_subcategory/' + this.props.eshop_id );
      const subcategory = await res.json();
      this.setState({
        subcategory
      });
    } catch (e) {
      console.log(e);
    }


  }



  setMedia(media_name){
    this.state.media = 'http://127.0.0.1:8000' + media_name
  }


       render() {
         return (
           <section className="trending">

                { this.state.subcategory.map(item =>

                   <EShopShore2 name = {item.name} id={item.id}/>
                )}

           </section>
         )
       }
  }
