import React from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail, Col, Row, Button } from 'react-bootstrap'



export default class ProductList2 extends React.Component {

  state = {
    sold : false,
    remove : false
  }




  async soldProduct(product_id){
    const auth = localStorage.getItem('auth_code')


    try {
      const res = await fetch('https://www.iwansell.com/api/sold_product/' + product_id + '/', {
  
        headers : {
          'Authorization' : 'Token ' + auth,
          
        },
      
      });
      const sold = await res.json();
      this.setState({
        sold
      });
    } catch (e) {
      console.log(e);
    }
    
}
  async removeProduct(product_id){

    const auth = localStorage.getItem('auth_code')


    try {
      const res = await fetch('https://www.iwansell.com/api/remove_product/' + product_id + '/', {
  
        headers : {
          'Authorization' : 'Token ' + auth,
          
        },
      
      });
      const remove = await res.json();
      this.setState({
        remove
      });
    } catch (e) {
      console.log(e);
    }

  }



  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media/' + media_name
  }




       render() {
         return (
           <section className="product-list "> 
               <Col lg={3} md={3} smHidden xsHidden>
               <div className="product-image">
                <div class="image">
               {this.setMedia(this.props.product_image)}
               <Thumbnail href={"product/" + this.props.product_id }  alt="product-image" src= { `${this.state.media}` }/>
               </div></div>

               <div className="product-options">
               <Link to={`/product/${ this.props.product_id } `}>
               <h3>{this.props.product_name}</h3>
               </Link>

                <p className="lg-fonts">Starting price : {this.props.starting_price}</p>
                
                <Row>
                  {this.state.sold ? (
                   
                    <Col lg={6} md={6}><Button bsStyle="success">sold</Button></Col>
                  ) : (
                    <Col lg={6} md={6}><Button onClick={this.soldProduct.bind(this, this.props.product_id)}>sold</Button></Col>
                  )}

                  {this.state.removed ? (
                    <Col lg={6} md={6}><Button bsStyle="success">removed</Button></Col>
                  ) : (
                    <Col lg={6} md={6}><Button onClick={this.removeProduct.bind(this, this.propsproduct_id)}>remove</Button ></Col>
                  )}
               
                </Row>
                
               </div><br /><br />

               </Col>



            <Col sm={10} smOffset={1} xs={10} xsOffset={1} lgHidden mdHidden>
             {this.setMedia(this.props.product_image)}
             <Thumbnail href={"product/" + this.props.product_id } alt="product-image" src= { `${this.state.media}` }/>
             
             <div className="product-options">
             <Link to={`/product/${ this.props.product_id } `}>
             <h3>{this.props.product_name}</h3>
             </Link>
              <p className="sm-fonts">Starting price : {this.props.starting_price}</p>
             
              <Row>
              {this.state.sold ? (
                   
                   <Col lg={6} md={6}><Button bsStyle="success">sold</Button></Col>
                 ) : (
                   <Col lg={6} md={6}><Button onClick={this.soldProduct.bind(this, this.props.product_id)}>sold</Button></Col>
                 )}

                 {this.state.removed ? (
                   <Col lg={6} md={6}><Button bsStyle="success">removed</Button></Col>
                 ) : (
                   <Col lg={6} md={6}><Button onClick={this.removeProduct.bind(this, this.props.product_id)}>remove</Button ></Col>
                )}

              </Row>
            </div>
             </Col>

           </section>
         )
       }
  }
