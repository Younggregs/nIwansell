import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import Heading from './houses/Heading'
import ProductImage from './houses/Product Image'

export default class EShopStore2 extends React.Component {

  state = {
    eshop_store: [],
    media : null
  }


  async componentWillMount() {

    try {
      const res = await fetch('http://199.192.21.172:8000/eshop_store/' + this.props.eshop_id + '/' + this.props.id );
      const eshop_store = await res.json();
      this.setState({
        eshop_store
      });
    } catch (e) {
      console.log(e);
    }

  }


  setMedia(media_name){
    this.state.media = 'http://199.192.21.172:8000' + media_name
  }


       render() {
         return (
           <section className="trending">
             <Grid>
             <Row>
              <Col lg={12} md={12} smHidden xsHidden>
                <Row>
                <Heading title = {this.props.name}/>
                
                
                {this.state.eshop_store.map(item =>
                
                <Col lg={3} md={3} smHidden xsHidden>
               
               <Link to={`/product/${ item.id } `}>
                <section className="product-image">
                <div class="image">
                    {this.setMedia(item.product_image)}
                    <Image alt="product-image" src= { `${this.state.media}` }/>
                </div>
                </section>
                        <h3>{item.product_name}</h3>
                        <p className="lg-fonts">Starting price : {item.starting_price}</p>
                </Link>
                
                </Col>
                
                )}
                </Row>
                

             </Col>




             <Col sm={12} xs={12} lgHidden mdHidden>
                <Row>
                <Heading title = {this.props.name}/>
                

                <div class="eshop-scrolling-wrapper">

                {this.state.eshop_store.map(item =>
                <span>
                <div class="card">
                 <Link to={`/product/${ item.id } `}>
                
                <div class="image">
                    {this.setMedia(item.product_image)}
                    <Image alt="product-image" src= { `${this.state.media}` }/>
                </div>
                </Link>
                </div>

                <Link to={`/product/${ item.id } `}>
                    <h3>{item.product_name}</h3>
                    <p className="lg-fonts">Starting price : {item.starting_price}</p>
                </Link>
                </span>
                )}
             
              </div>

              </Row>
              
             </Col>


             </Row>
             </Grid>
           </section>
         )
       }
  }
