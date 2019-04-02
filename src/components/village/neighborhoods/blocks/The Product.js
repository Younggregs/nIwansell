import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col,Thumbnail,Image, Button, Glyphicon } from 'react-bootstrap'
import BuzzMe from './houses/Buzz Me'

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
    var media = 'https://www.iwansell.com/media/' + media_name
    this.state.media = media
  }

  setDp(dp){
    var display_pic = 'https://www.iwansell.com/media/' + dp
    this.state.dp = display_pic
  }

   
       render() {
         return (
           <section className="the-product">
                 <Col lg={12} md={12} xsHidden smHidden>
                   <Row>
                      <Col lg={4} lgOffset={2} md={4} mdOffset={2} smHidden xsHidden>
                        {this.setMedia(this.state.productDetail.product_image)}
                        <Thumbnail alt="product-image" src= { `${this.state.media}` } />
                      </Col>

                 <Col lg={4} md={4} smHidden xsHidden>
                  <div className="product-info">
                    {this.setDp(this.state.productDetail.display_pic)}

                    <Row>
                    
                    <Col lg={3} md={3} smHidden xsHidden>
                     <Link to={`/profile/${ this.state.productDetail.profile_id } `}>
                      <Image alt="client's-image" circle responsive  src= { `${this.state.dp}` }/>
                     </Link>
                    </Col>
                    <Col lg={6} md={6} smHidden xsHidden>
                     <Link to={`/profile/${ this.state.productDetail.profile_id } `}>
                      {this.state.productDetail.firstname} {this.state.productDetail.lastname} 
                     </Link>
                    </Col>
                      
                    </Row>


                    <h3>{this.state.productDetail.product_name}</h3>
                      <p>{this.state.productDetail.product_description}</p>
                      <p>Starting price: {this.state.productDetail.starting_price}</p>
                      

                    

                      {this.props.logged_in ? (

                        <Row>
                      <Col lg={6} md={6} smHidden xsHidden>
                        <BuzzMe phone={this.state.productDetail.phone} />&nbsp;
                      </Col>
                      <Col lg={6} md={6} smHidden xsHidden>
                      <Link to={`/hagglemates/${ this.state.productDetail.profile_id }`}>
                        <Button bsStyle="primary">Message me</Button>
                      </Link>
                      </Col>
                      </Row>

                      ) : (

                        <Row>
                      <Col lg={6} md={6} smHidden xsHidden>
                        <BuzzMe phone={this.state.productDetail.phone}/>&nbsp;
                      </Col>
                      </Row>

                      )}


                <p>Favorite product
                        {this.state.isfavorited ? (
                          <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><Glyphicon glyph="star"/></span></Button>
                          ) : (
                        <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><Glyphicon glyph="star-empty"/></span></Button>
                        )}
                
                      </p>
                      

                </div>
                </Col>

                </Row>




                </Col>



                <Col sm={12} xs={12} lgHidden mdHidden>
                   <Row>
                      <Col sm={12} xs={12} >

                        {this.setDp(this.state.productDetail.display_pic)}
                    
                    <div className="sm-client-dp">
                    <Row>
                    
                    <Col sm={3} xs={3}>
                    <Link to={`/profile/${ this.state.productDetail.profile_id } `}>
                      <Image alt="client's-image" circle responsive  src= { `${this.state.dp}` }/>
                    </Link>
                    </Col>
                    <Col sm={6} xs={6}>
                     <Link to={`/profile/${ this.state.productDetail.profile_id } `}>
                      {this.state.productDetail.firstname} {this.state.productDetail.lastname} 
                     </Link>
                      </Col>
                      
                    </Row>
                    </div><br />


                        {this.setMedia(this.state.productDetail.product_image)}
                        <Thumbnail alt="product-image" src= { `${this.state.media}` }>
                        <h3>{this.state.productDetail.product_name}</h3>
                          <p>{this.state.productDetail.product_description}</p>
                          <p>Starting price : {this.state.productDetail.starting_price}</p>
                      


                    


                      
                      {this.props.logged_in ? (

                        <Row>
                      <Col lg={6} md={6} smHidden xsHidden>
                        <BuzzMe phone={this.state.productDetail.phone} />&nbsp;
                      </Col>
                      <Col lg={6} md={6} smHidden xsHidden>
                      <Link to={`/hagglemates/${ this.state.productDetail.profile_id }`}>
                        <Button bsStyle="primary">Message me</Button>
                      </Link>
                      </Col>
                      </Row>

                      ) : (

                        <Row>
                      <Col lg={6} md={6} smHidden xsHidden>
                        <BuzzMe phone={this.state.productDetail.phone}/>&nbsp;
                      </Col>
                      </Row>

                      )}


                      <p>Favorite product
                        {this.state.isfavorited ? (
                          <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><Glyphicon glyph="star"/></span></Button>
                          ) : (
                        <Button onClick={this.favorite.bind(this)}><span className="fav-glyphs"><Glyphicon glyph="star-empty"/></span></Button>
                        )}
                      </p>
                        </Thumbnail>

                      </Col>
                  </Row>

                </Col>

           </section>
         )
       }
  }
