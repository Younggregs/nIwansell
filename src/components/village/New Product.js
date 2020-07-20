import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';

import loadable from '@loadable/component'

const NavigationHeader = loadable(() => import('./neighborhoods/blocks/Navigation Header'))
const Footer = loadable(() => import('./neighborhoods/Footer.js'))
const GotoTop = loadable(() => import('./neighborhoods/blocks/houses/Goto Top'))
const Copyright = loadable(() => import('./neighborhoods/blocks/houses/Copyright'))
const NewProductForm = loadable(() => import('./neighborhoods/blocks/houses/New Product Form.js'))
const NewEShopProductForm = loadable(() => import('./neighborhoods/blocks/houses/New EShop Product Form'))

export default class NewProduct extends React.Component {

  state = {
    eshop_exist: true,
    isLoading: false
  }

  async componentDidMount() {

    this.setState({ isLoading: true})
    
    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('https://www.iwansell.com/api/eshop_exist/',{

        headers : {
          'Authorization' : 'Token ' + auth,

        },

      } );
      const eshop_exist = await res.json();
      this.setState({
        eshop_exist
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({ isLoading: false})


  }


  render() {
    return (
       <div className="product-manager">
         
         <NavigationHeader/>
         <Container>
          <Row className="justify-content-md-center">
          <Col lg={6} md={6} sm={12} xs={12}>
          <div>
            {this.state.eshop_exist.eshop_exist ? (
              <NewEShopProductForm/>
            ) : (
              <NewProductForm/>
            )}
           
          </div>
          </Col>
          </Row><br /><br />
         </Container>
         <GotoTop/>
         <Footer/>
         <Copyright/>
       </div>
     )
 }
}

