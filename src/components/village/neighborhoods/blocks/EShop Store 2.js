import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Heading from './houses/Heading'
import ProductImage from './houses/Product Image'

export default class EShopStore2 extends React.Component {

  state = {
    eshop_store: [],
    media : null
  }


  async componentWillMount() {

    try {
      const res = await fetch('https://www.iwansell.com/api/eshop_store/'+ this.props.eshop_id + '/' + this.props.id + '/');
      const eshop_store = await res.json();
      this.setState({
        eshop_store
      });
    } catch (e) {
      console.log(e);
    }

  }


  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }


  render() {
    return (
      <section className="trending">
        <Container>
        <Row>

           <br />
                <div className="trending-header">
                  <p className="trending-title">{this.props.name} <i>SHELF</i></p> 
                </div>
                <br />


           {this.state.eshop_store.map(item =>

           <Col lg={3} md={3} sm={6} xs={6}>

          <Link to={`/product/${ item.id } `}>

             {this.setMedia(item.product_image)}

             <ProductImage media={this.state.media}/>
             </Link>

          <Link to={`/product/${ item.id } `}>
             <Button variant='outline-dark'>{item.product_name}</Button><br />
             <Button variant='dark'>{item.starting_price}</Button>
          </Link>

           </Col>

           )}

        </Row>
        </Container>
      </section>
    )
  }
}
