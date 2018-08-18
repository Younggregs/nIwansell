import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import Heading from './houses/Heading'
import ProductImage from './houses/Product Image'

export default class EShopStore2 extends React.Component {

  state = {
    eshop_store: [],
    media : null
  }


  async componentWillMount() {

    try {
      const res = await fetch('http://127.0.0.1:8000/eshop_store/1/'+ this.props.id );
      const eshop_store = await res.json();
      this.setState({
        eshop_store
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
             <Grid>
             <Row>
              <Col lg={12} md={12} smHidden xsHidden>
                <Row>
                <Heading title = {this.props.name}/>


                {this.state.eshop_store.map(item =>

                <Col lg={3} md={3} smHidden xsHidden>

               <Link to={`/product/${ this.props.id } `}>

                  {this.setMedia(item.product_image)}

                  <ProductImage media={this.state.media}/>
                  </Link>

                </Col>

                )}
                </Row>


             </Col>




             <Col sm={12} xs={12} lgHidden mdHidden>
                <Row>
                <Heading title = {this.props.name}/>


                <div class="scrolling-wrapper-eshop">

                {this.state.eshop_store.map(item =>

                <div class="card-eshop">
                  <Link to={`/product/${ this.props.id } `}>

                  {this.setMedia(item.product_image)}

                  <img src= { `${this.state.media}` } alt="thumbnail"/>
                  </Link>
                </div>
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
