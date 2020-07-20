import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button, Container, ListGroup } from 'react-bootstrap'
import BuzzMe from './houses/Buzz Me'
import MoreMedia from './More Media'

export default class TheProduct extends React.Component {

  state = {
    productDetail: [],
    media: null,
    dp: null,
    isfavorited: false
  }
 
   async componentWillMount() {
     try {
       const res = await fetch('https://www.iwansell.com/api/product/' + this.props.product_id);
       const productDetail = await res.json();
       this.setState({
         productDetail
       });
     } catch (e) {
       console.log(e);
     }
   }


   async favorite(){

    const auth = localStorage.getItem('auth_code')
  
    try {
      const res = await fetch('https://www.iwansell.com/api/favorite/2/' + this.props.product_id, {
      
       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const isfavorited = await res.json();
        this.setState({
          isfavorited
        });
    } catch (e) {
      console.log(e);
    }

  }




   setMedia(media_name){
    var media = 'https://www.iwansell.com/api/media/' + media_name
    this.state.media = media
  }

  setDp(dp){
    var display_pic = 'https://www.iwansell.com/api/media/' + dp
    this.state.dp = display_pic
  }

   
  render() {
    return (
      <Container>
              <Row>
                 <Col lg={8} md={8} sm={12} xs={12}>
                   <Row>
                     {this.setMedia(this.state.productDetail.product_image)}
                     <img alt="product-image" src= { `${this.state.media}` } />
                   </Row>
                   <Row>
                     <MoreMedia product_id={this.props.product_id}/>
                   </Row><br /><br />
                 </Col>

            <Col lg={4} md={4} sm={12} xs={12}>
             <div className="product-info" id="product-info">
             <div className="price-tag">
                 <p>
                   Starting-price: {this.state.productDetail.starting_price}
                 </p>
             </div><br />


               {this.setDp(this.state.productDetail.display_pic)}
               
               <Row className="justify-content-md-center">
                <Link to={`/profile/${ this.state.productDetail.profile_id }`}>
                 <Image alt="seller's image" height="100" width="100" roundedCircle responsive  src= { `${this.state.dp}` }/>
                </Link>
                </Row>

               <Row className="justify-content-md-center">
                <Link to={`/profile/${ this.state.productDetail.profile_id }`}>
                 {this.state.productDetail.firstname} {this.state.productDetail.lastname} 
                </Link>
               </Row>


               <h3>{this.state.productDetail.product_name}</h3>
                 <p>{this.state.productDetail.product_description}</p>
                 

               

                 {this.props.logged_in ? (

                 <section>
                 <Row className="justify-content-md-center">
                 
                   <BuzzMe phone = {'+234' + this.state.productDetail.phone} 
                           account_id = {this.state.productDetail.profile_id}/>&nbsp;
                 </Row>

                 <Row className="justify-content-md-center">
                 <Link to={`/hagglemates/${ this.state.productDetail.profile_id }`}>
                   <Button bsStyle="primary">Message me</Button>
                 </Link>
                 </Row>

                 </section>

                 ) : (

                 <Row className="justify-content-md-center">
                   <BuzzMe phone={this.state.productDetail.phone}
                           account_id = {this.state.productDetail.profile_id}/>&nbsp;
                 </Row>

                 )}

           
           {/* 
           <p>Favorite product
                   {this.state.isfavorited ? (
                     <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><div glyph="star"/></span></Button>
                     ) : (
                   <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><div glyph="star-empty"/></span></Button>
                   )}
           
                 </p>
           */}

           </div>

           <Row className="justify-content-md-center">
           <div className="safety-tips">
               <h5>Safety Tips</h5>
               <ListGroup variant="flush">
                 <ListGroup.Item>Meet client with a friend.</ListGroup.Item>
                 <ListGroup.Item>Meet client in open space.</ListGroup.Item>
                 <ListGroup.Item>Pay only when you have recieved item.</ListGroup.Item>
                 <ListGroup.Item>Evaluate item to satisfaction before payment.</ListGroup.Item>
               </ListGroup>
               <br />
               <br />
               <Button variant='warning'>Sell Item Now!</Button>
           </div>
           </Row>

           </Col>

           </Row>



           {/* 
           <Col sm={12} xs={12} lgHidden mdHidden>
              <Row>
                 <Col sm={12} xs={12} >

                   {this.setDp(this.state.productDetail.display_pic)}
               
               <div className="sm-client-dp">
               <Row>
               
               <Col sm={3} xs={3}>
               <Link to={`/profile/${ this.state.productDetail.profile_id }`}>
                 <Image alt="client's-image" circle responsive  src= { `${this.state.dp}` }/>
               </Link>
               </Col>
               <Col sm={6} xs={6}>
                <Link to={`/profile/${ this.state.productDetail.profile_id }`}>
                 {this.state.productDetail.firstname} {this.state.productDetail.lastname} 
                </Link>
                 </Col>
                 
               </Row>
               </div><br />


                   {this.setMedia(this.state.productDetail.product_image)}
                   <img alt="product-image" src= { `${this.state.media}` }/>
                   <h3>{this.state.productDetail.product_name}</h3>
                     <p>{this.state.productDetail.product_description}</p>
                     <p>Starting price : {this.state.productDetail.starting_price}</p>
                 


               


                 
                 {this.props.logged_in ? (

                   <Row>
                 <Col xs={6} sm={6} lgHidden mdHidden>
                   <BuzzMe phone={this.state.productDetail.phone} 
                           account_id = {this.state.productDetail.profile_id}/>&nbsp;
                 </Col>
                 <Col xs={6} sm={6} lgHidden mdHidden>
                 <Link to={`/hagglemates/${ this.state.productDetail.profile_id }`}>
                   <Button bsStyle="primary">Message me</Button>
                 </Link>
                 </Col>
                 </Row>

                 ) : (

                   <Row>
                 <Col xs={6} sm={6} lgHidden mdHidden>
                   <BuzzMe phone={this.state.productDetail.phone}
                           account_id = {this.state.productDetail.profile_id}/>&nbsp;
                 </Col>
                 </Row>

                 )}


                 <p>Favorite product
                   {this.state.isfavorited ? (
                     <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><div glyph="star"/></span></Button>
                     ) : (
                   <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><div glyph="star-empty"/></span></Button>
                   )}
                 </p>
                 

                 </Col>
             </Row>

           </Col>
                     */}

      </Container>
    )
  }
}
